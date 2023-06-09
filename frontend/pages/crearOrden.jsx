import React, { useContext, useState } from "react";
import { TokenAcceptedContext } from "../context/ContractContext";
import { TableTokenContext } from "../context/ContractContext";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseEther } from "viem";
import { dataContract } from "../utils/dataContract";
import { contractContext } from "../context/ContractContext";
import qrcode from "qrcode";
import Modal from 'react-modal';

export default function CrearOrden() {
  const [amountDAI, setAmountDAI] = useState("");
  const [amountMATIC, setAmountMATIC] = useState("");
  const [addressTokenPay, setaddressTokenPay] = useState("MATIC");

  const [qr, setQr] = useState("");

  const { addresscontract, setAddresscontract } = useContext(contractContext);
  const { listTokensAccepted, setListTokensAccepted } =
    useContext(TokenAcceptedContext);
  const { tableTokenAccepted, setTableTokenAccepted } =
    useContext(TableTokenContext);

  const recipientAddress = addresscontract;
  const amountIne18 = amountMATIC; // 1 Ether

  const uri = `ethereum:${recipientAddress}?value=${amountIne18}e18`;
  console.log(uri);

  const dataPayERC20 = usePrepareContractWrite({
    address: addresscontract,
    abi: dataContract.abi,
    functionName: "payERC20",
    value: amountDAI,
  });

  async function generateQR() {
    try {
      // Ahora, generamos el código QR de esta solicitud de transacción
      let url = await qrcode.toDataURL(uri);
      setQr(url);
      console.log(url);
      Modal.setAppElement('#qrpay');
      openModal();
    } catch (error) {
      console.log("Error generating QR: " + error);
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  // const dataPay = usePrepareContractWrite({
  //   address: dataContract.addressContract.Ganache,
  //   abi: dataContract.abi,
  //   functionName: "pay",
  //   args: [nombreEmpresa, address, goalMatic],
  // });

  // console.log("dataPayERC20====> ", dataPayERC20);
  // console.log("dataPay====> ", dataPay);

  // const useContractdataPay = useContractWrite(dataPay.config);
  // const useContractdataPayERC20 = useContractWrite(dataPayERC20.config);

  return (
    <div>
      <form
        className="flex flex-col items-stretch md:w-5/12 mx-auto sm:w-full p-4"
        onSubmit={(e) => {
          e.preventDefault();
          generateQR();
        }}
      >
        <div className="mb-6">
          <label
            htmlFor="montoDai"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Orden de pago en DAI
          </label>
          <input
            type="number"
            min="0"
            step="any"
            id="montoDai"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0.001"
            onChange={(e) => {
              setAmountDAI(parseEther(e.target.value.toString()));
              setAmountMATIC(e.target.value / 0.78);
            }}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="stablecoins"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seleciona el token que depositarán
          </label>

          <select
            name="stablecoins"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="-"
            onChange={(e) => setaddressTokenPay(e.target.value)}
          >
            <option value="MATIC">MATIC</option>
            {tableTokenAccepted.map((element, index) => (
              <option value={element[2]}>
                {element[0]} ({element[1]})
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-stretch">
          <div className="w-1/2 m-2">
            <button
              type="submit"
              id="buttonQR"
              // onClick={()=>generateQR()}
              disabled={!amountDAI || addressTokenPay !== "MATIC"}
              className={`text-white font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                              ${
                                !amountDAI || addressTokenPay !== "MATIC"
                                  ? "bg-blue-400 cursor-not-allowed"
                                  : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              }
                              `}
            >
              Pagar
            </button>
          </div>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="QR"
        >
        <div>
          <p>Transfiere {amountIne18} MATIC a la direccion: {recipientAddress}</p>
          <div className="flex flex-row min-h-screen justify-center items-center">
          <img src={qr}></img>
          </div>
          <div className="flex flex-row min-h-screen justify-center items-center">
          <div className="w-1/2 m-2">
            <button
              type="submit"
              // onClick={()=>{
              //   e.preventDefault();
              //   useContractdataPay.write()}}
              id="buttonPayWallet"
              disabled={!amountDAI || !addressTokenPay}
              className={`text-white w-full font-medium rounded-lg text-sm   px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                              ${
                                !amountDAI || !addressTokenPay
                                  ? "bg-blue-400 cursor-not-allowed"
                                  : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              }
                              `}
            >
              Paga desde wallet
            </button>
          </div>
          </div>
        </div>
        </Modal>
        <div id="qrpay"></div>
      </form>
    </div>
  );
}
