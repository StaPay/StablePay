import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { parseEther } from "viem";
import addToken from "./api/addToken";
import getNameToken from "./api/getNameToken";
import TablaTokenAceptados from "../components/tablaTokenAceptados";
import { useToast } from "@chakra-ui/react";
import { waitForTransaction } from "@wagmi/core";
import { TokenAcceptedContext } from "../context/ContractContext";
import { TableTokenContext } from "../context/ContractContext";
import { getListTokensAccepted, listTokens } from "./api/getListTokensAccepted";

export default function Addtokens() {
  const [addressToken, setaddressToken] = useState("");
  const [goalToken, setGoalToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { listTokensAccepted, setListTokensAccepted } =
    useContext(TokenAcceptedContext);
  const { tableTokenAccepted, setTableTokenAccepted } =
    useContext(TableTokenContext);
  const toast = useToast();

  function closeOpenModal() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  async function tryAddtoken() {
    const { hash } = await addToken(addressToken, goalToken);
    toast({
      title: "",
      description: `Registando el token, espera unos segundos`,
      status: "info",
      duration: 2500,
      isClosable: true,
    });

    const { data, error } = await waitForTransaction({
      hash: hash,
    });

    console.log("data ===>", data);

    if (error) {
      toast({
        title: "Error",
        description: `Hubo un error :( \n ${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const { listAddressToken, tableToken } = await listTokens();
      setListTokensAccepted(listAddressToken);
      setTableTokenAccepted(tableToken);

      toast({
        title: "",
        description: `Token registrado, espera unos segundos`,
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    }
  }

  return (
    <div className="md:flex lg:p-32 md:py-32">
      {/* Columna 1: Token Aceptados */}
      <div className="px-2.5 md:w-1/2 my-8 md:mb-16 text-center ">
        <h1 className="md:text-5xl text-3xl font-extrabold dark:text-white ">
          Tokens Aceptados
        </h1>
        <small className="ml-2 md:text-5xl text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-32">
          como medio de pago
        </small>
        <div className="my-16">
        <TablaTokenAceptados></TablaTokenAceptados>
        </div>
      </div>

      {/* Columna 2: Agregar nuevo token */}
      <div className="hidden md:block">
        <div className="my-8 md:mb-16 text-center">
          <h1 className="md:text-5xl text-3xl font-extrabold dark:text-white ">
            Agrega un Nuevo Token
          </h1>
          <small className="ml-2 md:text-5xl text-3xl font-semibold text-gray-500 dark:text-gray-400">
            como medio de pago
          </small>
        </div>
        <form
          className="flex flex-col items-stretch md:w-3/4 mx-auto sm:w-full px-2.5"
          onSubmit={(e) => {
            {
              e.preventDefault();
              tryAddtoken();
            }
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="addressToken"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingresa el address del token que quieres añadir como medio de pago
            </label>
            <input
              type="text"
              id="addressToken"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0xa1df....c124"
              onChange={(e) => setaddressToken(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="goalToken"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ¿Cuál es la cantidad máxima de este token que deseas que se
              almacene en el contrato inteligente?
            </label>
            <input
              type="number"
              min="0"
              step="any"
              id="goalToken"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0.001"
              onChange={(e) =>
                setGoalToken(parseEther(e.target.value.toString()))
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={!addressToken || !goalToken}
            className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                            ${
                              !addressToken || !goalToken
                                ? "bg-blue-400 cursor-not-allowed"
                                : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            }
                            `}
          >
            Agregar Token
          </button>
        </form>
      </div>

      {/* DIAL */}
      <div
        data-dial-init
        className="fixed right-6 bottom-6 group md:hidden z-50"
      >
        <button
          onClick={() => closeOpenModal()}
          id="dial"
          // data-dial-toggle="speed-dial-menu-default"
          // aria-controls="speed-dial-menu-default"
          // aria-expanded="false"
          className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600
        dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 z-50"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 transition-transform group-hover:rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>

        {/* MODAL */}
        <div>
          {isOpen && (
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 md:hidden w-full p-4 overflow-x-hidden  md:inset-0 h-auto max-h-full z-40 flex justify-center"
              // className="fixed right-6 bottom-24 w-full h-auto p-4 bg-white rounded-lg shadow dark:bg-gray-700 z-40"
            >
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    onClick={() => closeOpenModal()}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>

                  <div className="px-6 py-6 lg:px-8">
                    <h1 className="md:text-5xl text-3xl font-extrabold dark:text-white text-center">
                      Agrega un Token
                    </h1>
                    <div className="items-center content-center mb-8">
                      <small className="md:text-5xl text-2xl font-semibold text-gray-500 dark:text-gray-400 text-center">
                        como medio de pago
                      </small>
                    </div>
                    <form
                      className="flex flex-col items-stretch md:w-3/4 mx-auto sm:w-full px-2.5"
                      onSubmit={(e) => {
                        {
                          e.preventDefault();
                          tryAddtoken(addressToken, goalToken);
                        }
                      }}
                    >
                      <div className="mb-6">
                        <label
                          htmlFor="addressToken"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Ingresa el address del token que quieres añadir como
                          medio de pago
                        </label>
                        <input
                          type="text"
                          id="addressToken"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="0xa1df....c124"
                          onChange={(e) => setaddressToken(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="goalToken"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ¿Cuál es la cantidad máxima de este token que deseas
                          que se almacene en el contrato inteligente?
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          id="goalToken"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="0.001"
                          onChange={(e) =>
                            setGoalToken(parseEther(e.target.value.toString()))
                          }
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!addressToken || !goalToken}
                        className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                                          ${
                                            !addressToken || !goalToken
                                              ? "bg-blue-400 cursor-not-allowed"
                                              : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                          }
                                          `}
                      >
                        Agregar Token
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
