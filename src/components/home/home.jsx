import React from "react";
import {
  Buttondiv,
  Effective,
  Features,
  Footer,
  HomeDiv,
  Intro,
  LanguageCarousel,
  LearnAnything,
  Learning,
  Linediv,
  MoreInfos,
  Worldbest,
  Writings,
} from "./style";
import earth from "../../assets/earth.png";
import computer from "../../assets/computer.png";
import computer2 from "../../assets/computer2.svg";
import duofly from "../../assets/duofly.svg";
import duobag from "../../assets/duowithbag.svg";
import duoteach from "../../assets/duoteach.svg"

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeDiv>
        <div>
          <img src={earth} alt="earth" />
        </div>
        <Intro>
          <h1>The free, fun, and effective way to learn a language!</h1>
          <div>Get started</div>
          <button>I have an account</button>
        </Intro>
      </HomeDiv>
      <LanguageCarousel>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M13.75 2.75L5.5 11L13.75 19.25"
            stroke="white"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>SPANISH</p>
        <p>ITALIAN</p>
        <p>PORTUGESE</p>
        <p>DUTCH</p>
        <p>JAPANESE</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M8.25 2.75L16.5 11L8.25 19.25"
            stroke="white"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </LanguageCarousel>
      <Worldbest>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="186"
            height="145"
            viewBox="0 0 186 145"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M63.463 137.267C63.463 133.185 66.7926 129.855 70.8741 129.855H82.4741C86.5556 129.855 89.8852 133.185 89.8852 137.267C89.8852 141.348 86.5556 144.678 82.4741 144.678H70.8741C66.7926 144.678 63.463 141.348 63.463 137.267Z"
              fill="#F49000"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M95.4705 137.267C95.4705 133.185 98.8001 129.855 102.882 129.855H114.482C118.563 129.855 121.893 133.185 121.893 137.267C121.893 141.348 118.563 144.678 114.482 144.678H102.882C98.8001 144.678 95.4705 141.348 95.4705 137.267Z"
              fill="#F49000"
            />
            <path
              d="M13.5185 109.233L55.3 33.6186C57.5556 29.6446 63.0334 29.0001 66.1482 32.3297C81.2926 48.5483 84.3 73.1445 73.3445 93.1223C62.3889 113.1 39.9408 123.519 18.1371 119.222C13.626 118.363 11.263 113.315 13.5185 109.233Z"
              fill="#58CC02"
            />
            <path
              d="M171.837 109.233L130.056 33.6187C127.8 29.5372 122.322 28.8928 119.1 32.2224C103.956 48.4409 100.948 73.0372 111.904 93.015C122.859 112.993 145.307 123.411 167.111 119.115C171.73 118.363 174.093 113.315 171.837 109.233Z"
              fill="#58CC02"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M61.8519 2.14824C76.8889 8.48527 87.2 11.7075 92.7852 11.7075C98.3704 11.7075 108.467 8.59268 123.289 2.25564C133.063 -1.93325 144.448 2.68527 148.637 12.4593C149.604 14.8223 150.141 17.4001 150.141 19.9779V80.0186C150.141 111.811 124.363 137.589 92.5704 137.589C60.7778 137.482 35 111.811 35 80.0186V19.8705C35 9.23712 43.5926 0.644531 54.3333 0.644531C56.9111 0.644531 59.3815 1.18157 61.8519 2.14824Z"
              fill="#58CC02"
            />
            <path
              d="M88.274 98.2776C88.4888 97.5258 87.9518 96.8813 87.1999 96.8813H72.6999C71.9481 96.8813 71.411 97.6332 71.6259 98.2776C72.8073 101.607 76.137 103.97 79.8962 103.97C83.6555 103.97 87.0925 101.607 88.274 98.2776ZM112.441 96.8813H97.9407C97.1888 96.8813 96.6518 97.6332 96.8666 98.2776C98.0481 101.607 101.378 103.97 105.137 103.97C108.896 103.97 112.333 101.607 113.515 98.2776C113.73 97.6332 113.193 96.8813 112.441 96.8813ZM99.7666 109.018H85.2666C84.5148 109.018 83.9777 109.77 84.1925 110.415C85.374 113.744 88.7036 116.107 92.4629 116.107C96.2222 116.107 99.6592 113.744 100.841 110.415C101.163 109.77 100.626 109.018 99.7666 109.018Z"
              fill="#89E219"
            />
            <path
              d="M65.1814 11.1706L82.5814 30.0743C83.5481 31.0409 83.1184 32.6521 81.9369 33.2965C75.9221 35.9817 68.8332 34.478 64.3221 29.4298C59.811 24.3817 59.0592 17.1854 62.2814 11.4928C63.0332 10.3113 64.2147 10.2039 65.1814 11.1706Z"
              fill="#89E219"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M80.2184 27.7114C86.5555 34.1559 97.7258 34.1559 104.707 27.7114C111.689 21.267 103.633 65.0892 103.633 64.8744C103.633 64.8744 99.874 64.767 92.3555 64.8744C90.3147 64.8744 86.6629 64.8744 81.5073 64.8744C76.4592 35.8744 76.0295 23.4151 80.2184 27.7114Z"
              fill="#89E219"
            />
            <path
              d="M55.6222 15.6816L72.5925 34.6927C73.5592 35.6594 73.1296 37.2705 71.9481 37.9149C65.9333 40.6001 58.8444 39.0964 54.3333 34.0483C49.8222 29.0001 49.0703 21.8038 52.4 16.1112C53.0444 14.8223 54.6555 14.7149 55.6222 15.6816Z"
              fill="#89E219"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M63.5703 20.9448H64.2148C76.7814 20.9448 86.8777 31.1485 86.8777 43.6078V55.6374C86.8777 68.2041 76.674 78.3004 64.2148 78.3004H63.5703C51.0036 78.3004 40.9073 68.0967 40.9073 55.6374V43.7152C40.9073 31.1485 51.0036 20.9448 63.5703 20.9448Z"
              fill="#89E219"
            />
            <path
              d="M119.744 11.1706L102.667 30.0743C101.7 31.0409 102.13 32.6521 103.311 33.2965C109.326 35.9817 116.415 34.478 120.926 29.4298C125.437 24.3817 126.189 17.1854 122.859 11.4928C122.215 10.3113 120.604 10.2039 119.744 11.1706Z"
              fill="#89E219"
            />
            <path
              d="M129.626 15.6816L112.548 34.6927C111.581 35.6594 112.011 37.2705 113.193 37.9149C119.207 40.6001 126.296 39.0964 130.807 34.0483C135.318 29.0001 136.07 21.8038 132.741 16.1112C132.204 14.8223 130.593 14.7149 129.626 15.6816Z"
              fill="#89E219"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M120.818 20.9448H121.463C134.03 20.9448 144.126 31.1485 144.126 43.6078V55.6374C144.126 68.2041 133.922 78.3004 121.463 78.3004H120.926C108.467 78.3004 98.3703 68.2041 98.2629 55.7448L98.1555 43.7152C98.0481 31.1485 108.144 20.9448 120.818 20.9448Z"
              fill="#89E219"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M92.6777 55.7446C97.0815 55.7446 100.733 59.3965 100.733 63.8002V66.378C100.733 70.7817 97.0815 74.4335 92.6777 74.4335C88.274 74.4335 84.6222 70.7817 84.6222 66.378V63.8002C84.6222 59.3965 88.274 55.7446 92.6777 55.7446Z"
              fill="#F49000"
            />
            <path
              d="M81.5073 64.3372C82.474 59.3965 87.1999 55.7446 92.7851 55.7446C98.0481 55.7446 102.667 59.5039 103.633 64.3372V64.7668C103.633 65.0891 103.526 65.3039 103.204 65.1965L92.7851 67.0224C92.5703 67.0224 92.5703 67.0224 92.3555 67.0224L81.9369 65.1965C81.6147 65.1965 81.5073 65.0891 81.5073 64.7668V64.3372Z"
              fill="#FFC200"
            />
            <path
              d="M95.0406 61.0078C94.8258 61.0078 94.7184 61.0078 94.5036 60.9004C93.1073 60.3634 91.8184 60.3634 90.6369 60.9004C89.7776 61.2226 88.9184 60.793 88.5962 60.0412C88.2739 59.1819 88.7036 58.3226 89.4554 58.0004C91.3887 57.2486 93.4295 57.2486 95.5776 58.0004C96.4369 58.3226 96.8665 59.1819 96.5443 60.0412C96.3295 60.5782 95.685 61.0078 95.0406 61.0078Z"
              fill="#FFDE00"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M64.7518 29.1074C73.4518 29.1074 80.5407 36.1963 80.5407 44.8963V54.4556C80.5407 63.1556 73.4518 70.2445 64.7518 70.2445C56.0518 70.2445 48.9629 63.1556 48.9629 54.4556V44.8963C48.9629 36.1963 56.0518 29.1074 64.7518 29.1074Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M67.2221 38.1299C71.3036 38.1299 74.6333 41.4595 74.6333 45.541V53.704C74.6333 57.7854 71.3036 61.1151 67.2221 61.1151C63.1407 61.1151 59.811 57.7854 59.811 53.704V45.541C59.811 41.4595 63.1407 38.1299 67.2221 38.1299Z"
              fill="#4B4B4B"
            />
            <path
              d="M60.9925 47.3669C63.6619 47.3669 65.8258 45.2029 65.8258 42.5335C65.8258 39.8642 63.6619 37.7002 60.9925 37.7002C58.3231 37.7002 56.1592 39.8642 56.1592 42.5335C56.1592 45.2029 58.3231 47.3669 60.9925 47.3669Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M120.281 29.1074C128.981 29.1074 136.07 36.1963 136.07 44.8963V54.4556C136.07 63.1556 128.981 70.2445 120.281 70.2445C111.581 70.2445 104.493 63.1556 104.493 54.4556V44.8963C104.493 36.1963 111.581 29.1074 120.281 29.1074Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M117.811 38.1299C121.893 38.1299 125.222 41.4595 125.222 45.541V53.704C125.222 57.7854 121.893 61.1151 117.811 61.1151C113.73 61.1151 110.4 57.7854 110.4 53.704V45.541C110.4 41.4595 113.73 38.1299 117.811 38.1299Z"
              fill="#4B4B4B"
            />
            <path
              d="M110.722 47.3669C113.392 47.3669 115.556 45.2029 115.556 42.5335C115.556 39.8642 113.392 37.7002 110.722 37.7002C108.053 37.7002 105.889 39.8642 105.889 42.5335C105.889 45.2029 108.053 47.3669 110.722 47.3669Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <h1>The world’s #1 way to learn a language</h1>
          <span>
            Learning with Duolingo is fun, and research shows that it works!
            With quick, bite-sized lessons, you’ll earn points and unlock new
            levels while gaining real-world communication skills.
          </span>
        </div>
      </Worldbest>
      <Linediv />
      <Learning>
        <h1>Why you’ll love learning with Duolingo</h1>
        <Features>
          <div>
            <Effective>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="43"
                viewBox="0 0 44 43"
                fill="none"
              >
                <path
                  d="M22.4388 35.1022C28.2547 35.1022 32.9694 30.4292 32.9694 24.6646C32.9694 18.9001 28.2547 14.2271 22.4388 14.2271C16.6229 14.2271 11.9082 18.9001 11.9082 24.6646C11.9082 30.4292 16.6229 35.1022 22.4388 35.1022Z"
                  fill="#FF9600"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.9886 9.56799L30.6615 18.1294C30.8727 18.4003 31.0036 18.7252 31.0392 19.0669C31.0748 19.4086 31.0137 19.7535 30.8629 20.0622C30.7121 20.3709 30.4776 20.631 30.1861 20.8129C29.8947 20.9948 29.558 21.0912 29.2144 21.0911H15.6641C15.3206 21.0913 14.984 20.9949 14.6926 20.8131C14.4011 20.6313 14.1666 20.3713 14.0157 20.0628C13.8648 19.7542 13.8036 19.4094 13.839 19.0678C13.8745 18.7261 14.0051 18.4013 14.2162 18.1303L20.8891 9.56799C21.0729 9.33239 21.308 9.14181 21.5766 9.01073C21.8451 8.87965 22.14 8.81152 22.4388 8.81152C22.7376 8.81152 23.0325 8.87965 23.3011 9.01073C23.5696 9.14181 23.8047 9.33239 23.9886 9.56799Z"
                  fill="#FF9600"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9375 13.1192L28.4228 21.8026C28.745 22.0102 28.9941 22.3135 29.1351 22.6699C29.2761 23.0263 29.3018 23.4179 29.2088 23.7897C29.1157 24.1615 28.9086 24.4949 28.6163 24.7429C28.3241 24.9909 27.9615 25.1411 27.5795 25.1724L13.8923 26.2957C13.6398 26.3164 13.3858 26.2846 13.1462 26.2022C12.9066 26.1199 12.6866 25.9888 12.5002 25.8172C12.3138 25.6457 12.165 25.4373 12.0631 25.2054C11.9612 24.9734 11.9084 24.7228 11.9082 24.4695V14.7717C11.9083 14.4186 12.0035 14.0722 12.1838 13.7686C12.364 13.4651 12.6227 13.2157 12.9326 13.0467C13.2425 12.8776 13.5922 12.7952 13.945 12.8079C14.2978 12.8207 14.6406 12.9282 14.9375 13.1192Z"
                  fill="#FF9600"
                />
                <path
                  d="M22.4388 30.8465C24.9207 30.8465 26.9327 28.8639 26.9327 26.4184C26.9327 23.9728 24.9207 21.9902 22.4388 21.9902C19.9568 21.9902 17.9448 23.9728 17.9448 26.4184C17.9448 28.8639 19.9568 30.8465 22.4388 30.8465Z"
                  fill="#FFC800"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1013 20.015L25.9366 23.6323C26.0277 23.7481 26.0843 23.8873 26.1 24.0339C26.1157 24.1804 26.0899 24.3284 26.0255 24.461C25.961 24.5935 25.8606 24.7052 25.7356 24.7834C25.6107 24.8616 25.4662 24.903 25.3189 24.9029H19.5586C19.4112 24.903 19.2668 24.8616 19.1418 24.7834C19.0169 24.7052 18.9165 24.5935 18.852 24.461C18.7876 24.3284 18.7617 24.1804 18.7774 24.0339C18.7931 23.8873 18.8497 23.7481 18.9408 23.6323L21.7762 20.015C21.855 19.9146 21.9556 19.8335 22.0704 19.7777C22.1852 19.7219 22.3111 19.6929 22.4387 19.6929C22.5664 19.6929 22.6923 19.7219 22.8071 19.7777C22.9219 19.8335 23.0225 19.9146 23.1013 20.015Z"
                  fill="#FFC800"
                />
              </svg>
              <h1>Effective and efficient</h1>
            </Effective>
            <p>
              Our courses effectively and efficiently teach reading, listening,
              and speaking skills. Check out our latest research!
            </p>
            <Effective>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M22.4388 36.1671C30.1933 36.1671 36.4796 29.8808 36.4796 22.1263C36.4796 14.3717 30.1933 8.08545 22.4388 8.08545C14.6842 8.08545 8.39795 14.3717 8.39795 22.1263C8.39795 29.8808 14.6842 36.1671 22.4388 36.1671Z"
                  fill="#70D700"
                />
                <path
                  d="M17.3341 22.4283L20.8118 25.9061C20.9334 26.0274 21.0982 26.0955 21.2699 26.0955C21.4417 26.0955 21.6064 26.0274 21.728 25.9061L28.3684 19.2656"
                  stroke="white"
                  stroke-width="2.91698"
                  stroke-linecap="round"
                />
              </svg>
              <h1>Personalized learning</h1>
            </Effective>
            <p>
              Combining the best of AI and language science, lessons are
              tailored to help you learn at just the right level and pace.
            </p>
          </div>
          <div>
            <img src={computer} alt="computer" />
          </div>
          <div>
            <Effective>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.45858 7.07427L8.38284 10.1727C8.6602 10.3917 9.06005 10.3572 9.2958 10.0939L15.1955 3.50561C16.1814 2.40461 17.8732 2.31132 18.9742 3.29725C19.0252 3.34286 19.0744 3.39042 19.1217 3.43981L25.508 10.1077C25.7527 10.3632 26.1539 10.384 26.4237 10.1554L30.0592 7.07427C30.7852 6.45898 31.8726 6.54874 32.4879 7.27475C32.8484 7.70019 32.9808 8.27382 32.8431 8.81424L28.4681 25.9874C28.2298 26.923 27.3872 27.5778 26.4217 27.5778H7.79412C6.82862 27.5778 5.98608 26.923 5.74772 25.9874L1.43042 9.04075C1.17055 8.02067 1.78682 6.98306 2.8069 6.72319C3.3821 6.57665 3.99272 6.70645 4.45858 7.07427Z"
                  fill="#FFC800"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.88543 11.4051L8.12986 12.5429C8.56024 12.9364 9.22812 12.9065 9.62161 12.4761C9.63813 12.458 9.65403 12.4394 9.66926 12.4202L12.7661 8.51974C13.2256 7.94101 14.0673 7.84436 14.646 8.30385C14.9384 8.53604 15.1206 8.87988 15.1483 9.25225L16.2461 23.9768C16.3011 24.7137 15.7482 25.3557 15.0113 25.4106C14.9782 25.4131 14.945 25.4143 14.9118 25.4143H9.72245C9.10514 25.4143 8.56796 24.992 8.42225 24.3921L5.47077 12.2421C5.35876 11.781 5.64176 11.3163 6.10286 11.2043C6.38088 11.1368 6.67428 11.2121 6.88543 11.4051Z"
                  fill="#FFDE00"
                />
              </svg>
              <h1>Stay motivated</h1>
            </Effective>
            <p>
              We make it easy to form a habit of language learning, with
              game-like features, fun challenges, and reminders from our
              friendly mascot, Duo the owl.
            </p>
            <Effective>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.97902 15.8055C5.97902 9.59074 11.017 4.55273 17.2317 4.55273C23.4464 4.55273 28.4844 9.59074 28.4844 15.8055V16.1465C30.5157 17.1384 31.915 19.2244 31.915 21.6372C31.915 25.0097 29.1809 27.7438 25.8084 27.7438H8.51767C5.14505 27.7438 2.41101 25.0097 2.41101 21.6372C2.41101 19.1703 3.87367 17.0451 5.97902 16.0815V15.8055Z"
                  fill="#9069CD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.52811 21.3667C6.91307 21.0485 5.69495 19.6246 5.69495 17.9162C5.69495 16.1784 6.9554 14.735 8.61196 14.4503C9.25598 10.4341 12.7372 7.36572 16.935 7.36572C21.1328 7.36572 24.614 10.4341 25.2579 14.4505C26.9141 14.7355 28.1742 16.1787 28.1742 17.9162C28.1742 19.6243 26.9565 21.048 25.3418 21.3665C25.0214 25.7297 21.3799 29.1701 16.935 29.1701C12.49 29.1701 8.84858 25.7298 8.52811 21.3667Z"
                  fill="#F3AD6D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0745 15.1875C14.0745 14.619 14.5353 14.1582 15.1037 14.1582C15.6721 14.1582 16.1329 14.619 16.1329 15.1875V17.932C16.1329 18.5004 15.6721 18.9612 15.1037 18.9612C14.5353 18.9612 14.0745 18.5004 14.0745 17.932V15.1875Z"
                  fill="#BF8034"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6426 15.1875C17.6426 14.619 18.1034 14.1582 18.6718 14.1582C19.2402 14.1582 19.701 14.619 19.701 15.1875V17.932C19.701 18.5004 19.2402 18.9612 18.6718 18.9612C18.1034 18.9612 17.6426 18.5004 17.6426 17.932V15.1875Z"
                  fill="#BF8034"
                />
                <path
                  d="M14.0743 20.5088H19.8528C20.2106 20.5088 20.5007 20.7988 20.5007 21.1567V21.4927C20.5007 23.4462 18.9171 25.0298 16.9636 25.0298C15.0101 25.0298 13.4264 23.4462 13.4264 21.4927V21.1567C13.4264 20.7988 13.7165 20.5088 14.0743 20.5088Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5788 7.14643L20.0621 7.71809V9.65218L17.5594 12.246L14.0468 14.0922L10.1393 14.7516H7.90027V13.5648L9.17351 10.949L10.9297 8.68524L14.7494 6.79492H18.0423L19.5788 7.14643Z"
                  fill="#9069CD"
                />
                <path
                  d="M6.33484 15.1186H9.26945C12.9072 15.0938 18.6972 14.5766 20.5836 7.91912C20.6801 7.52826 20.7729 7.07638 20.862 6.56348"
                  stroke="#9069CD"
                  stroke-width="1.85712"
                />
              </svg>
              <h1>Have fun with it!</h1>
            </Effective>
            <p>
              Effective learning doesn’t have to be boring! Build your skills
              each day with engaging exercises and playful characters.
            </p>
          </div>
        </Features>
        <Linediv />
      </Learning>
      <Worldbest>
        <div>
          <img src={duofly} alt="duofly" />
        </div>
        <div style={{ alignItems: "start" }}>
          <h1>Boost your learning with Super Duolingo</h1>
          <span>
            Learning a language on Duolingo is completely free, but you can
            remove ads and <br /> support free education with Super. First 2
            weeks on us!
          </span>
          <h2>Learn more about Super Duolingo</h2>
        </div>
      </Worldbest>
      <Linediv />
      <LearnAnything>
        <div style={{ alignItems: "start" }}>
          <h1>Learn anytime, anywhere.</h1>
          <span>
            Make your breaks and commutes more productive with our iPhone and
            Android apps. <br /> Download them and see why Apple and Google gave
            us their highest accolades.
          </span>
          <Buttondiv>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M25.41 18.4143C25.4398 16.1099 26.6495 13.9812 28.6155 12.7742C27.3696 10.9973 25.3576 9.91104 23.1866 9.84321C20.9024 9.60378 18.688 11.2082 17.524 11.2082C16.3375 11.2082 14.5455 9.86698 12.6156 9.90663C10.0765 9.98855 7.76668 11.3953 6.53134 13.6122C3.90063 18.1607 5.86291 24.8455 8.38291 28.5221C9.64371 30.3224 11.1172 32.3335 13.0453 32.2622C14.932 32.1841 15.6367 31.0607 17.9141 31.0607C20.1704 31.0607 20.8316 32.2622 22.7988 32.2169C24.8234 32.1841 26.0989 30.4085 27.3155 28.5911C28.2214 27.3083 28.9184 25.8905 29.3809 24.3902C26.9763 23.3746 25.4129 21.0217 25.41 18.4143Z"
                  fill="#4B4B4B"
                />
                <path
                  d="M21.6943 7.42526C22.7982 6.10189 23.3421 4.40093 23.2104 2.68359C21.5239 2.86049 19.966 3.66542 18.8473 4.93801C17.7425 6.1936 17.1828 7.83623 17.2915 9.50413C19.0006 9.5217 20.6233 8.75549 21.6943 7.42526Z"
                  fill="#4B4B4B"
                />
              </svg>
              <div>
                <span>Download on the</span>
                <h3>Appstore</h3>
              </div>
            </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.04736 4.81679C4.04736 4.61025 4.0638 4.41697 4.09523 4.23774L16.9603 17.8195L4.0746 31.423C4.05664 31.283 4.04736 31.1353 4.04736 30.98V4.81679ZM5.46521 33.0894C5.93865 33.1659 6.49992 33.0507 7.10043 32.7153L22.7673 23.95L18.4449 19.3867L5.46521 33.0894ZM19.9294 17.8195L24.7086 22.8649L30.5311 19.6078C32.2097 18.6674 32.2097 17.1295 30.5311 16.1913L24.6097 12.8785L19.9294 17.8195ZM22.6691 11.7927L7.10043 3.0825C6.61742 2.8116 6.15965 2.68384 5.75353 2.68384C5.70096 2.68384 5.64924 2.68596 5.59842 2.69019L18.4449 16.2523L22.6691 11.7927Z" fill="#4B4B4B"/>
</svg>
              <div>
                <span>Get it on</span>
                <h3>Googleplay</h3>
              </div>
            </button>
          </Buttondiv>
        </div>
        <div>
          <img src={duobag} alt="duobag" />
        </div>
      </LearnAnything>
      <Linediv/>
      <Worldbest>
        <div>
          <img src={computer2} alt="computer2" />
        </div>
        <div style={{ alignItems: "start" }}>
          <h1>Duolingo for Schools</h1>
          <span>
          Free teacher tools to help students learn languages through the Duolingo app, both <br /> in and out of the classroom.
          </span>
          <h2>Bring Duolingo to your classroom</h2>
        </div>
      </Worldbest>
      <Linediv/>
      <LearnAnything>
        <div style={{ alignItems: "start" }}>
          <h1>The Duolingo English Test</h1>
          <span>
          Welcome to the convenient, fast, and affordable English test accepted around the world. <br /> By integrating the latest assessment science and AI, <br /> we empower anyone to take the test where and when they’re at their best.
          </span>
          <h3>CERTIFY YOUR ENGLISH</h3>
        </div>
        <div>
          <img src={duobag} alt="duobag" />
        </div>
      </LearnAnything>
      <Linediv/>
      <Worldbest>
        <div>
          <img src={duoteach} alt="duoteach" />
        </div>
        <div style={{ alignItems: "start" }}>
          <h1>Effective and efficient courses</h1>
          <span>
          Our courses effectively and efficiently teach reading, listening, and speaking skills. <br /> Check out our latest research!
        </span>
          <h2>Learn more about our research</h2>
        </div>
      </Worldbest>
      <Footer>
        <Writings>
          <h1>Learn a language with Duolingo.</h1>
          <button>Get Started</button>
        </Writings>
        <MoreInfos>
            <div>
              <h1>About Us</h1>
              <p>Courses</p>
              <p>Mission</p>
              <p>Approach</p>
              <p>Efficacy</p>
              <p>Team</p>
              <p>Research</p>
              <p>Careers</p>
              <p>Brand guidelines</p>
              <p>Store</p>
              <p>Press</p>
              <p>Investors</p>
              <p>Contact us</p>
              </div>
              <div>
              <h1>Products</h1>
              <p>Duolingo</p>
              <p>Duolingo For Schools</p>
              <p>Duolingo English test</p>
              <p>Duolingo ABC</p>
              <p>Duolingo Math</p>
              <p>Podcast</p>
              <p>Stories</p>
              <p>Duolingo for Business</p>
              <p>Super Duolingo</p>
              <p>Gift Super DuolingoInvestors</p>
              </div>
              <div>
                <h1>Apps</h1>
                <p>Duolingo for android</p>
                <p>Duolingo for IOS</p>
                <p>Duolingo ABC (IOS)</p>
              </div>
              <div>
                <h1>Help and support</h1>
                <p>Duolingo FAQs</p>
                <p>Schools FAQs</p>
                <p>Duolingo English</p>
                <p>Status</p>
              </div>
              <div>
                <h1>Privacy terms</h1>
                <p>Community GUidliness</p>
                <p>Terms</p>
                <p>privacy</p> <br /> <br />
                <h1>Social</h1>
                <span>Blog</span>
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>YouTube</span>
              </div>
          </MoreInfos>
      </Footer>
    </div>
  );
};

export default Home;
