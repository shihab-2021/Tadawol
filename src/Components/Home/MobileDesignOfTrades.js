import React from "react";

const MobileDesignOfTrades = () => {
  return (
    <div className=" mx-4 block md:hidden">
      <div className="flex justify-between mb-4">
        <h3 className="text-[23px] font-bold">Trades</h3>
        <div>
          <a
            href="/"
            className="flex items-center gap-1 text-[17px] text-[#7D7D81]"
          >
            See All{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M7 6C6.99555 5.86192 6.96882 5.73497 6.91982 5.61915C6.86637 5.50334 6.78619 5.39198 6.67929 5.28508L1.53452 0.253898C1.36526 0.0846325 1.15813 0 0.91314 0C0.743875 0 0.592428 0.0400891 0.458797 0.120267C0.320713 0.200445 0.211581 0.309577 0.131403 0.447661C0.0467706 0.581292 0.00445414 0.730512 0.00445414 0.895323C0.00445414 1.14477 0.0979958 1.36303 0.285078 1.55011L4.86192 6L0.285078 10.4499C0.0979958 10.6414 0.00445414 10.8597 0.00445414 11.1047C0.00445414 11.2739 0.0467706 11.4254 0.131403 11.559C0.211581 11.6927 0.320713 11.7996 0.458797 11.8797C0.592428 11.9599 0.743875 12 0.91314 12C1.15813 12 1.36526 11.9154 1.53452 11.7461L6.67929 6.71492C6.79065 6.60802 6.87305 6.49666 6.9265 6.38085C6.9755 6.26058 7 6.13363 7 6Z"
                fill="#3C3C43"
                fill-opacity="0.6"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="md:hidden flex gap-3 wrapper mb-5">
        <a href="/" className="px-[18px] py-1 border rounded-full text-[17px]">
          All
        </a>
        <a
          href="/"
          className="px-[18px] py-1 rounded-full text-[17px] font-semibold text-[#005A58] border-0"
          style={{ background: "rgba(52, 144, 142, 0.11)" }}
        >
          Stocks
        </a>
        <a href="/" className="px-[18px] py-1 border rounded-full text-[17px]">
          Crypto
        </a>
        <a href="/" className="px-[18px] py-1 border rounded-full text-[17px]">
          NTF
        </a>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-2 ">
          <div className="flex items-center justify-between gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="#D9F867"
                  stroke="#D9F867"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M8 12L10.6667 15L16 9"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                  d="M26.946 14.8322C26.1553 15.8146 24.8335 16.5422 23.7832 16.5422C23.6534 16.5422 23.5354 16.5179 23.4646 16.5058C23.4528 16.4452 23.4174 16.2633 23.4174 16.0692C23.4174 14.8322 24.0311 13.5953 24.7037 12.8191C25.5416 11.8004 26.9578 11.0485 28.1379 11C28.1615 11.1334 28.1733 11.3032 28.1733 11.473C28.1733 12.71 27.6658 13.9348 26.946 14.8322ZM27.772 16.7969C28.4329 16.7969 30.8286 16.8696 32.3981 19.186C32.2565 19.2951 29.8845 20.6776 29.8845 23.758C29.8845 27.3113 32.9056 28.5846 33 28.6089C32.9882 28.6938 32.5161 30.331 31.4068 32.0167C30.4037 33.4841 29.3534 34.9757 27.772 34.9757C26.1789 34.9757 25.7658 34.0177 23.9484 34.0177C22.1547 34.0177 21.5174 35 20.0776 35C18.6143 35 17.5994 33.6296 16.4429 31.956C15.0857 29.9793 14 26.9111 14 24.0005C14 19.3436 16.9503 16.8696 19.8652 16.8696C21.3994 16.8696 22.6739 17.9005 23.6534 17.9005C24.5739 17.9005 26.0137 16.7969 27.772 16.7969Z"
                  fill="black"
                />
              </svg>
            </span>
            <div>
              <h5 className="text-[15px] font-semibold">AAPL</h5>
              <p
                style={{ color: "rgba(60, 60, 67, 0.60))" }}
                className=" text-[13px]"
              >
                Apple Inc.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="26"
                viewBox="0 0 70 26"
                fill="none"
              >
                <path
                  d="M1 19.2162L4.57895 11.1081L8.15789 3L11.7368 8.40541L15.3158 17.5946L18.8947 23L22.4737 15.4324L26.0526 19.2162L29.6316 5.7027L33.2105 8.94595L36.7895 20.2973L40.3684 23L43.9474 13.8108L47.5263 7.32432H51.1053L54.6842 20.2973L58.2632 6.24324L61.8421 16.5135L65.4211 8.40541L69 5.7027M69 5.7027V5.7027Z"
                  stroke="url(#paint0_linear_2_958)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_958"
                    x1="69"
                    y1="13"
                    x2="1"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4BA33B" />
                    <stop
                      offset="0.689964"
                      stop-color="#4BA33B"
                      stop-opacity="0.580443"
                    />
                    <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <p className="text-base font-medium">$180.95</p>
              <p className="text-[#004038] text-base px-2 py-1 bg-[#D0EF7B] rounded-lg">
                +0.86
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 12L8 12"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 16L12 8"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                  d="M33 14H25.3969C24.8081 14 24.3041 14.3645 24.114 14.8789L17 34H24.6592L31.7738 14.8796C31.8661 14.6308 32.032 14.4145 32.2504 14.2583C32.4688 14.1021 32.7297 14.0131 33 14.0024V14Z"
                  fill="#0996C7"
                />
              </svg>
            </span>
            <div>
              <h5 className="text-[15px] font-semibold">NASDAQ</h5>
              <p
                style={{ color: "rgba(60, 60, 67, 0.60))" }}
                className=" text-[13px]"
              >
                NASDAQ Comp...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="26"
                viewBox="0 0 70 26"
                fill="none"
              >
                <path
                  d="M1 19.2162L4.57895 11.1081L8.15789 3L11.7368 8.40541L15.3158 17.5946L18.8947 23L22.4737 15.4324L26.0526 19.2162L29.6316 5.7027L33.2105 8.94595L36.7895 20.2973L40.3684 23L43.9474 13.8108L47.5263 7.32432H51.1053L54.6842 20.2973L58.2632 6.24324L61.8421 16.5135L65.4211 8.40541L69 5.7027M69 5.7027V5.7027Z"
                  stroke="url(#paint0_linear_2_958)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_958"
                    x1="69"
                    y1="13"
                    x2="1"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4BA33B" />
                    <stop
                      offset="0.689964"
                      stop-color="#4BA33B"
                      stop-opacity="0.580443"
                    />
                    <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <p className="text-base font-medium">$180.95</p>
              <p className="text-[#004038] text-base px-2 py-1 bg-[#D0EF7B] rounded-lg">
                +0.86
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 12L8 12"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 16L12 8"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                  d="M33 14H25.3969C24.8081 14 24.3041 14.3645 24.114 14.8789L17 34H24.6592L31.7738 14.8796C31.8661 14.6308 32.032 14.4145 32.2504 14.2583C32.4688 14.1021 32.7297 14.0131 33 14.0024V14Z"
                  fill="#0996C7"
                />
              </svg>
            </span>
            <div>
              <h5 className="text-[15px] font-semibold">NASDAQ</h5>
              <p
                style={{ color: "rgba(60, 60, 67, 0.60))" }}
                className=" text-[13px]"
              >
                NASDAQ Comp...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="24"
                viewBox="0 0 70 24"
                fill="none"
              >
                <path
                  d="M1 22L4.57895 19.2973L8.15789 6.32432L11.7368 14.4324L15.3158 18.2162L18.8947 5.24324L22.4737 7.40541H26.0526L29.6316 19.2973L33.2105 22L36.7895 16.5946L40.3684 6.32432L43.9474 4.7027L47.5263 10.1081L51.1053 2L54.6842 4.7027L58.2632 18.2162L61.8421 7.94595L65.4211 15.5135L69 12.8108M69 12.8108V12.8108Z"
                  stroke="url(#paint0_linear_2_983)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_983"
                    x1="69"
                    y1="12"
                    x2="1"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4BA33B" />
                    <stop
                      offset="0.689964"
                      stop-color="#4BA33B"
                      stop-opacity="0.580443"
                    />
                    <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <p className="text-base font-medium">$180.95</p>
              <p className="text-[#004038] text-base px-2 py-1 bg-[#D0EF7B] rounded-lg">
                +0.86
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 12L8 12"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 16L12 8"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                  d="M33 14H25.3969C24.8081 14 24.3041 14.3645 24.114 14.8789L17 34H24.6592L31.7738 14.8796C31.8661 14.6308 32.032 14.4145 32.2504 14.2583C32.4688 14.1021 32.7297 14.0131 33 14.0024V14Z"
                  fill="#0996C7"
                />
              </svg>
            </span>
            <div>
              <h5 className="text-[15px] font-semibold">NASDAQ</h5>
              <p
                style={{ color: "rgba(60, 60, 67, 0.60))" }}
                className=" text-[13px]"
              >
                NASDAQ Comp...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="22"
                viewBox="0 0 70 22"
                fill="none"
              >
                <path
                  d="M1 9.10811L4.57895 6.40541L8.15789 6.94595L11.7368 3.7027L15.3158 14.5135L18.8947 11.8108L22.4737 6.40541L26.0526 17.2162L29.6316 18.2973L33.2105 17.2162L36.7895 18.2973L40.3684 1L43.9474 21L47.5263 5.32432L51.1053 13.4324L54.6842 15.5946L58.2632 5.32432L61.8421 4.24324L65.4211 3.7027L69 21M69 21V21Z"
                  stroke="url(#paint0_linear_2_1024)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_1024"
                    x1="69"
                    y1="11"
                    x2="1"
                    y2="11"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4BA33B" />
                    <stop
                      offset="0.689964"
                      stop-color="#4BA33B"
                      stop-opacity="0.580443"
                    />
                    <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <p className="text-base font-medium">$180.95</p>
              <p className="text-[#004038] text-base px-2 py-1 bg-[#D0EF7B] rounded-lg">
                +0.86
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 12L8 12"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 16L12 8"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                  d="M33 14H25.3969C24.8081 14 24.3041 14.3645 24.114 14.8789L17 34H24.6592L31.7738 14.8796C31.8661 14.6308 32.032 14.4145 32.2504 14.2583C32.4688 14.1021 32.7297 14.0131 33 14.0024V14Z"
                  fill="#0996C7"
                />
              </svg>
            </span>
            <div>
              <h5 className="text-[15px] font-semibold">NASDAQ</h5>
              <p
                style={{ color: "rgba(60, 60, 67, 0.60))" }}
                className=" text-[13px]"
              >
                NASDAQ Comp...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="26"
                viewBox="0 0 70 26"
                fill="none"
              >
                <path
                  d="M1 19.2162L4.57895 11.1081L8.15789 3L11.7368 8.40541L15.3158 17.5946L18.8947 23L22.4737 15.4324L26.0526 19.2162L29.6316 5.7027L33.2105 8.94595L36.7895 20.2973L40.3684 23L43.9474 13.8108L47.5263 7.32432H51.1053L54.6842 20.2973L58.2632 6.24324L61.8421 16.5135L65.4211 8.40541L69 5.7027M69 5.7027V5.7027Z"
                  stroke="url(#paint0_linear_2_958)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_958"
                    x1="69"
                    y1="13"
                    x2="1"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4BA33B" />
                    <stop
                      offset="0.689964"
                      stop-color="#4BA33B"
                      stop-opacity="0.580443"
                    />
                    <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <p className="text-base font-medium">$180.95</p>
              <p className="text-[#004038] text-base px-2 py-1 bg-[#D0EF7B] rounded-lg">
                +0.86
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 12L8 12"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 16L12 8"
                  stroke="#005A58"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                  d="M30.3057 12L21.1592 31.341L17.7197 24.0126H14L19.6561 36H22.6624L34 12H30.3057Z"
                  fill="#D52B1E"
                />
              </svg>
            </span>
            <div>
              <h5 className="text-[15px] font-semibold">VZ</h5>
              <p
                style={{ color: "rgba(60, 60, 67, 0.60))" }}
                className=" text-[13px]"
              >
                Verizon Commu...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="26"
                viewBox="0 0 70 26"
                fill="none"
              >
                <path
                  d="M1 19.2162L4.57895 11.1081L8.15789 3L11.7368 8.40541L15.3158 17.5946L18.8947 23L22.4737 15.4324L26.0526 19.2162L29.6316 5.7027L33.2105 8.94595L36.7895 20.2973L40.3684 23L43.9474 13.8108L47.5263 7.32432H51.1053L54.6842 20.2973L58.2632 6.24324L61.8421 16.5135L65.4211 8.40541L69 5.7027M69 5.7027V5.7027Z"
                  stroke="url(#paint0_linear_2_958)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_958"
                    x1="69"
                    y1="13"
                    x2="1"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4BA33B" />
                    <stop
                      offset="0.689964"
                      stop-color="#4BA33B"
                      stop-opacity="0.580443"
                    />
                    <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <p className="text-base font-medium">$34.58</p>
              <p className="text-[#401300] text-base px-2 py-1 bg-[#FFB899] rounded-lg">
                -1.14
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDesignOfTrades;
