import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";

export default function InstructionsComponent() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className="flex flex-col md:flex-row">
        <header className={`${styles.header_container} `}>
          <h1>
            <span>Stapay</span>
          </h1>
          <p>
            Get started by editing this page in <span>/pages/index.js</span>
          </p>
        </header>
        <div class="css-2du5ey">
          <div class="css-ea7h0y">
            <h2 class="chakra-heading css-1dklj6k">Quickstart</h2>
            <p class="chakra-text css-0">
              Copy the request below and paste it in your terminal
            </p>
          </div>
          <div class="css-1p826p4">
            <div class="css-1oxkvu">
              <p class="chakra-text css-1itttjg">npx</p>
              create-web3-dapp@latest
            </div>
            <button type="button" class="chakra-button css-10zk0p1">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                class="chakra-icon css-x4t3su"
              >
                <path
                  fill="currentColor"
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="css-1gnsnpc"></div>
          <div class="css-juqqnc">
            <button
              type="button"
              class="chakra-button css-tbxuhe"
              aria-describedby="popup-2"
            >
              <span class="chakra-button__icon css-1wh2kri">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"
                  ></path>
                </svg>
              </span>
              Watch a 2-min overview video!
            </button>
          </div>
        </div>
      </div>

      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"https://createweb3dapp.alchemy.com/#components"}
        >
          <div className={styles.button}>
            {/* { <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> } */}
            <p>Add Components</p>
          </div>
        </a>

        <a
          target={"_blank"}
          href={"https://createweb3dapp.alchemy.com/#templates"}
        >
          <div className={styles.button} target={"_blank"}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Explore Templates</p>
          </div>
        </a>

        <a
          target={"_blank"}
          href={"https://docs.alchemy.com/docs/create-web3-dapp"}
        >
          <div className={styles.button}>
            <img
              src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
              width={"20px"}
              height={"20px"}
            />
            <p>Visit Docs</p>
          </div>
        </a>
      </div>

      <div className={styles.footer}>
        <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
          <img
            id="badge-button"
            style={{ width: "240px", height: "53px" }}
            src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
            alt="Alchemy Supercharged"
          />
        </a>

        <div className={styles.icons_container}>
          <div>
            <a
              href="https://github.com/alchemyplatform/create-web3-dapp"
              target={"_blank"}
            >
              Leave a star on Github
            </a>
          </div>
          <div>
            <a href="https://twitter.com/AlchemyPlatform" target={"_blank"}>
              Follow us on Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
