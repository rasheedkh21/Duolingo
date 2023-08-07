import React from "react";
import { HeaderDiv, LanguageSelect } from "./style";


const Header = () => {
  return (
    <div>
      <HeaderDiv>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="155"
            height="36"
            viewBox="0 0 155 36"
            fill="none"
          >
            <path
              d="M133.973 17.9998C133.973 12.3074 138.31 8.29562 144.057 8.29562C149.804 8.29562 154.141 12.3074 154.141 17.9998C154.141 23.6922 149.804 27.704 144.057 27.704C138.31 27.704 133.973 23.638 133.973 17.9998ZM148.448 17.9998C148.448 15.3434 146.768 13.3917 144.111 13.3917C141.455 13.3917 139.774 15.3434 139.774 17.9998C139.774 20.6563 141.455 22.6079 144.111 22.6079C146.768 22.6079 148.448 20.7105 148.448 17.9998ZM130.178 13.5001C130.558 14.2591 130.72 15.0723 130.72 15.9397C130.72 17.9998 129.636 19.8973 127.901 21.361C130.287 22.4995 131.696 25.2644 131.696 27.8666C131.696 32.7458 127.739 35.9986 121.721 35.9986C115.703 35.9986 111.746 32.8001 111.746 27.8666C111.692 25.156 113.155 22.6622 115.541 21.361C113.752 19.8973 112.722 17.9998 112.722 15.9397C112.722 11.6568 116.083 8.51247 121.396 8.51247C124.54 8.51247 125.462 9.05461 127.251 9.05461C128.443 9.10882 129.69 8.78354 130.72 8.13298C131.1 7.91613 131.479 7.75349 131.913 7.75349C132.618 7.75349 132.997 8.45826 132.997 9.32567C133.16 11.2231 131.967 12.9038 130.178 13.5001ZM126.112 27.704C126.112 25.5355 124.432 24.0175 121.775 24.0175C119.119 24.0175 117.438 25.4813 117.438 27.704C117.438 29.7641 119.281 31.3905 121.775 31.3905C124.269 31.3905 126.112 29.7641 126.112 27.704ZM118.251 16.265C118.306 18.1624 119.932 19.6804 121.884 19.6262C123.727 19.572 125.136 18.1082 125.245 16.265C125.245 14.3133 123.835 12.958 121.775 12.958C119.715 12.958 118.251 14.2591 118.251 16.265ZM109.144 18.3793V25.156C109.144 26.4571 108.656 26.9992 107.246 26.9992H105.349C103.939 26.9992 103.451 26.4571 103.451 25.156V18.5419C103.451 16.8613 103.18 15.6686 102.584 14.9096C101.879 14.0422 100.795 13.6085 99.7104 13.6627C98.5719 13.6085 97.4877 14.0964 96.7287 14.9096C96.0781 15.6686 95.6444 16.8613 95.6444 18.4877V25.1018C95.6444 26.4571 95.0481 26.945 93.747 26.945H91.8495C90.5484 26.945 89.952 26.4571 89.952 25.1018V9.92202C89.952 9.05461 90.3857 8.67511 91.0363 8.67511C92.0121 8.67511 93.3675 9.48831 94.3975 11.0605C95.9697 9.32567 98.1925 8.34983 100.524 8.34983C103.289 8.34983 105.511 9.32567 106.975 10.9521C108.439 12.5785 109.144 14.8012 109.144 18.3793ZM79.5431 3.09114C79.5431 1.35631 81.0068 0.000976562 82.6874 0.000976562H82.7959C84.4765 0.109403 85.7776 1.57316 85.6692 3.25378C85.5607 4.93439 84.097 6.23551 82.4164 6.12709C80.79 6.07287 79.5431 4.71754 79.5431 3.09114ZM79.9226 25.156V10.8979C79.9226 9.59674 80.4105 9.00039 81.82 9.00039H83.7175C85.127 9.00039 85.615 9.54253 85.615 10.8979V25.156C85.615 26.4571 85.127 26.9992 83.7175 26.9992H81.82C80.4105 26.9992 79.9226 26.4571 79.9226 25.156ZM69.8931 25.156V7.26557C69.8931 2.76586 72.3869 0.21783 74.5012 0.21783C75.1518 0.21783 75.5855 0.651537 75.5855 1.46474V25.156C75.5855 26.5113 75.0434 26.9992 73.688 26.9992H71.7906C70.4894 26.9992 69.8931 26.5113 69.8931 25.156ZM46.4729 17.9998C46.4729 12.3074 50.81 8.29562 56.5566 8.29562C62.3032 8.29562 66.6403 12.3074 66.6403 17.9998C66.6403 23.6922 62.3032 27.704 56.5566 27.704C50.81 27.704 46.4729 23.638 46.4729 17.9998ZM60.8937 17.9998C60.8937 15.3434 59.2131 13.3917 56.5566 13.3917C53.9001 13.3917 52.2195 15.3434 52.2195 17.9998C52.2195 20.6563 53.9001 22.6079 56.5566 22.6079C59.2131 22.6079 60.8937 20.7105 60.8937 17.9998ZM43.5454 10.8979V26.0776C43.5454 26.945 43.1117 27.3245 42.4611 27.3245C41.4853 27.3245 40.13 26.5113 39.1541 24.9933C37.6361 26.7282 35.4676 27.704 33.1364 27.6498C30.9679 27.704 28.9078 26.945 27.2814 25.4813C25.6008 23.8549 24.6792 21.361 24.6792 17.783V10.8979C24.6792 9.59674 25.1671 9.00039 26.5766 9.00039H28.4741C29.8836 9.00039 30.3716 9.54253 30.3716 10.8979V17.295C30.3716 19.4636 30.751 20.6021 31.4558 21.361C32.1064 22.0116 33.0822 22.3911 34.0038 22.3369C35.0339 22.3369 36.0097 21.9574 36.7145 21.1984C37.4193 20.4394 37.7988 19.2467 37.7988 17.4035V10.8979C37.7988 9.54253 38.3951 9.00039 39.6963 9.00039H41.5937C42.9491 9.00039 43.5454 9.54253 43.5454 10.8979ZM20.7758 1.46474V26.0776C20.7758 26.945 20.3421 27.3245 19.6915 27.3245C18.7157 27.3245 17.3603 26.5113 16.3845 25.0475C15.1918 26.4571 12.7522 27.704 9.93312 27.704C4.29493 27.704 0.5 23.5838 0.5 17.9998C0.5 12.4158 4.40336 8.29562 9.93312 8.29562C11.7764 8.29562 13.5654 8.83775 15.1376 9.86781V7.26557C15.1376 2.76586 17.6856 0.21783 19.7457 0.21783C20.3963 0.21783 20.7758 0.651537 20.7758 1.46474ZM15.1376 17.9998C15.1376 15.2349 13.1859 13.3917 10.7463 13.3917C8.30672 13.3917 6.30083 15.2349 6.30083 17.9998C6.30083 20.7647 8.25251 22.6079 10.7463 22.6079C13.2401 22.6079 15.1376 20.8189 15.1376 17.9998Z"
              fill="white"
            />
          </svg>
        </div>
        <LanguageSelect>
          <label htmlFor="">Site Language:</label>
          <select name="" id="">Site Language
          <option value="">English</option>
          </select>
        </LanguageSelect>
      </HeaderDiv>
    </div>
  );
};

export default Header;