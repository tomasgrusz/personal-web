const LogoSVG = ({
  mainColor,
  sideColor,
  size,
}: {
  mainColor?: string;
  sideColor?: string;
  size?: number;
}) => {
  return (
    <>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : 64}
        height={size ? size : 64}
      >
        <defs>
          <mask id="hole1">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="228.068"
              cy="155.073"
              rx="150"
              ry="150"
            ></ellipse>
          </mask>
          <mask id="hole2">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="254.895"
              cy="163.055"
              ry="60"
              rx="60"
            ></ellipse>
          </mask>
          <mask id="hole3">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="241.518"
              cy="177.465"
              ry="40"
              rx="40"
            ></ellipse>
            <ellipse
              fill="black"
              cx="287.187"
              cy="91.076"
              ry="40"
              rx="40"
            ></ellipse>
            <ellipse
              fill="black"
              cx="215.104"
              cy="158.816"
              rx="100"
              ry="100"
              mask="url(#hole2)"
            ></ellipse>
            <ellipse
              fill="black"
              cx="267.676"
              cy="51.44"
              ry="40"
              rx="40"
            ></ellipse>
          </mask>
          <mask id="hole4">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="241.518"
              cy="177.465"
              ry="40"
              rx="40"
            ></ellipse>
            <ellipse
              fill="black"
              cx="287.187"
              cy="91.076"
              ry="40"
              rx="40"
            ></ellipse>
            <ellipse
              fill="black"
              cx="215.104"
              cy="158.816"
              rx="100"
              ry="100"
              mask="url(#hole2)"
            ></ellipse>
          </mask>
          <mask id="hole5">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="232.765"
              cy="194.75"
              ry="60"
              rx="60"
            ></ellipse>
            <ellipse
              fill="black"
              cx="275.257"
              cy="106.687"
              ry="60"
              rx="60"
            ></ellipse>
            <ellipse
              fill="black"
              cx="215.104"
              cy="158.816"
              rx="70"
              ry="70"
            ></ellipse>

            <ellipse
              fill="black"
              cx="171.914"
              cy="84.729"
              rx="70"
              ry="70"
            ></ellipse>
            <ellipse
              fill="black"
              cx="173.97"
              cy="230.6"
              rx="70"
              ry="70"
            ></ellipse>
            <ellipse fill="black" cx="118" cy="151" ry="40" rx="40"></ellipse>

            <ellipse fill="black" cx="241" cy="273" ry="40" rx="40"></ellipse>
          </mask>
          <mask id="hole6">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="215.104"
              cy="158.816"
              rx="70"
              ry="70"
            ></ellipse>
          </mask>
          <mask id="hole7">
            <rect width="500" height="500" fill="white" />
            <ellipse
              fill="black"
              cx="287.187"
              cy="91.076"
              ry="40"
              rx="40"
            ></ellipse>
          </mask>
          <mask id="hole8">
            <rect width="500" height="500" fill="white" />
            <ellipse fill="black" cx="240" cy="177" ry="40" rx="40"></ellipse>
            <ellipse
              fill="black"
              cx="240.518"
              cy="205.465"
              ry="40"
              rx="40"
            ></ellipse>
            <ellipse
              fill="black"
              cx="1057.743"
              cy="953.911"
              ry="200"
              rx="200"
              transform="matrix(0.2, 0, 0, 0.2, 0, 0)"
            ></ellipse>
          </mask>
          <clipPath id="clip1">
            <ellipse
              cx="275.257"
              cy="106.687"
              ry="60"
              rx="60"
              mask="url(#hole3)"
            ></ellipse>
            <ellipse cx="209.778" cy="129.012" rx="70" ry="70"></ellipse>
          </clipPath>
          <clipPath id="clip2">
            <ellipse cx="307.187" cy="131.076" ry="40" rx="40"></ellipse>
          </clipPath>
          <clipPath id="clip3">
            <ellipse cx="233.765" cy="194.75" ry="60" rx="60"></ellipse>
            <ellipse cx="173.97" cy="230.6" rx="70" ry="70"></ellipse>
            <ellipse cx="118" cy="151" ry="40" rx="40"></ellipse>
            <ellipse cx="208.778" cy="129.012" rx="70" ry="70"></ellipse>
            <ellipse fill="black" cx="241" cy="273" ry="40" rx="40"></ellipse>
            <ellipse cx="150" cy="110" rx="70" ry="70"></ellipse>
          </clipPath>
          <clipPath id="clip4">
            <ellipse
              fill="white"
              cx="324.175"
              cy="160.053"
              ry="40"
              rx="40"
            ></ellipse>
          </clipPath>
          <clipPath id="clip5">
            {/* <ellipse cx="306.31" cy="170" ry="40" rx="40"></ellipse> */}
            <ellipse cx="245" cy="195" ry="55" rx="55"></ellipse>
          </clipPath>
        </defs>
        <g transform={`matrix(2, 0, 0, 2, 0, 0) translate(-100, -35)`}>
          {/* 
                Logo T
                START
            */}

          <ellipse
            stroke={sideColor ? sideColor : "white"}
            fill={sideColor ? sideColor : "white"}
            cx="254.895"
            cy="163.055"
            ry="60"
            rx="60"
            mask="url(#hole4)"
            clipPath="url(#clip1)"
          ></ellipse>
          <ellipse
            stroke={sideColor ? sideColor : "white"}
            fill={sideColor ? sideColor : "white"}
            cx="275.257"
            cy="106.687"
            ry="60"
            rx="60"
            mask="url(#hole3)"
          ></ellipse>
          <ellipse
            stroke={sideColor ? sideColor : "white"}
            fill={sideColor ? sideColor : "white"}
            cx="275.257"
            cy="106.687"
            ry="60"
            rx="60"
            clipPath="url(#clip4)"
            mask="url(#hole7)"
          ></ellipse>
          <ellipse
            stroke={sideColor ? sideColor : "white"}
            fill={sideColor ? sideColor : "white"}
            cx="215.104"
            cy="158.819"
            rx="100"
            ry="100"
            mask="url(#hole5)"
          ></ellipse>
          {/* 
                Logo T
                END
            */}
          {/* 
                Logo G
                START
             */}
          <ellipse
            stroke={mainColor ? mainColor : "white"}
            fill={mainColor ? mainColor : "white"}
            cx="215.104"
            cy="158.816"
            rx="100"
            ry="100"
            mask="url(#hole6)"
            clipPath="url(#clip3)"
          ></ellipse>
          <ellipse
            stroke={mainColor ? mainColor : "white"}
            fill={mainColor ? mainColor : "white"}
            cx="215.104"
            cy="158.816"
            rx="100"
            ry="100"
            mask="url(#hole8)"
            clipPath="url(#clip5)"
          ></ellipse>
          {/* 
                Logo G
                END
             */}
        </g>
      </svg>
    </>
  );
};

export default LogoSVG;
