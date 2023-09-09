import styles from './Background.module.scss';

const Background = () => {
  const STAR_COUNT = () => {
    const vw = window.innerWidth;
    if (vw > 1500) {
      return 200;
    } else if (vw > 750) {
      return 100;
    } else {
      return 50;
    }
  };

  return (
    <div className={styles.Background}>
      <div className={styles.sky}>
        {Array(STAR_COUNT())
          .fill(0)
          .map((x, i) => i)
          .map((el, i) => {
            return (
              <svg
                className={styles.star}
                key={`star-${i}`}
                viewBox="0 0 2000 2000"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <path
                  d="M 27.972027972027718 27.972027972027888 C 1000 1000 1000 1000 1968.5314685314688 27.972027972027888 C 1000 1000 1000 1000 1975.5244755244757 1968.5314685314688 C 1000 1000 1000 1000 31.468531468531182 1972.0279720279723 C 1000 1000 1000 1000 27.972027972027718 27.972027972027888"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            );
          })}
      </div>
      <svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <defs></defs>
        <path
          className={styles.seventh}
          d="M -19.50,580.50
           C -19.50,580.50 241.50,613.50 517.50,600.00
             564.00,592.50 613.50,658.50 742.50,658.50
             847.50,649.50 844.50,633.00 882.00,622.50
             1048.50,718.50 1537.50,1108.50 1944.00,933.00
             2391.00,702.00 1938.00,1104.00 1938.00,1104.00
             1938.00,1104.00 -12.00,1098.00 -12.00,1098.00
             -12.00,1098.00 -19.50,580.50 -19.50,580.50 Z"
        ></path>
        <path
          className={styles.sixth}
          d="M -61.50,762.00
           C -61.50,762.00 927.00,847.50 1168.50,628.50
             1239.00,681.00 1260.00,681.00 1260.00,681.00
             1260.00,681.00 1315.50,646.50 1315.50,646.50
             1315.50,646.50 1329.00,660.00 1329.00,660.00
             1329.00,660.00 1390.50,615.00 1390.50,615.00
             1390.50,615.00 1431.00,664.50 1443.00,661.50
             1455.00,658.50 1540.50,595.50 1566.00,546.00
             1597.50,519.00 1795.50,675.00 1939.50,616.50
             1996.50,595.50 1941.00,1099.50 1941.00,1099.50
             1941.00,1099.50 -48.00,1114.50 -48.00,1114.50
             -48.00,1114.50 -61.50,762.00 -61.50,762.00 Z"
        ></path>
        <path
          className={styles.fifth}
          d="M -42.00,499.50
           C -42.00,499.50 271.50,457.50 343.50,493.50
             426.00,520.50 496.50,601.50 520.50,618.00
             553.50,648.00 774.00,784.50 970.50,889.50
             1167.00,994.50 1351.50,679.50 1506.00,613.50
             1660.50,547.50 1893.00,496.50 1936.50,466.50
             1980.00,436.50 1941.00,1107.00 1941.00,1107.00
             1941.00,1107.00 -21.00,1126.50 -21.00,1126.50
             -21.00,1126.50 -42.00,499.50 -42.00,499.50 Z
           M 2010.00,952.50"
        ></path>
        <path
          className={styles.fourth}
          d="M 0.00,363.00
           C 0.00,363.00 273.00,541.50 411.00,682.50
             528.00,787.50 544.50,753.00 697.50,757.50
             769.50,774.00 925.50,817.50 1215.00,705.00
             1353.00,693.00 1503.00,693.00 1630.50,642.00
             1771.50,636.00 1932.00,597.00 1938.00,595.50
             1944.00,594.00 1941.00,1107.00 1941.00,1107.00
             1941.00,1107.00 -31.50,1105.50 -31.50,1105.50
             -31.50,1105.50 0.00,363.00 0.00,363.00 Z"
        ></path>
        <path
          className={styles.third}
          d="M -85.50,798.00
           C -85.50,798.00 297.00,835.50 606.00,820.50
             805.50,843.00 841.50,879.00 1009.50,874.50
             1170.00,862.50 1137.00,852.00 1273.50,816.00
             1273.50,816.00 1399.50,804.00 1503.00,750.00
             1503.00,750.00 1561.50,736.50 1705.50,624.00
             1849.50,511.50 1923.00,439.50 1944.00,369.00
             1965.00,298.50 1951.50,1120.50 1951.50,1120.50
             1951.50,1120.50 -79.50,1123.50 -79.50,1123.50
             -79.50,1123.50 -85.50,798.00 -85.50,798.00 Z"
        ></path>
        <path
          className={styles.second}
          d="M -9.00,424.50
           C -9.00,424.50 180.00,774.00 322.50,807.00
             465.00,840.00 844.50,961.50 1129.50,939.00
             1297.50,918.00 1324.50,853.50 1420.50,835.50
             1596.00,793.50 1573.50,807.00 1752.00,751.50
             1752.00,751.50 1831.50,724.50 1929.00,631.50
             2026.50,538.50 1935.00,1090.50 1935.00,1090.50
             1935.00,1090.50 -48.00,1116.00 -48.00,1116.00
             -48.00,1116.00 -9.00,424.50 -9.00,424.50 Z"
        ></path>
        <path
          className={styles.first}
          d="M 0.00,700.50
           C 0.00,700.50 114.00,748.50 295.50,807.00
             477.00,865.50 576.00,1039.50 1024.50,985.50
             1473.00,931.50 1324.50,888.00 1567.50,838.50
             1810.50,789.00 1836.00,799.50 1920.00,756.00
             2004.00,712.50 1969.50,1081.50 1918.50,1078.50
             1867.50,1075.50 -3.00,1080.00 -3.00,1080.00M 2233.50,703.50
           C 2233.50,703.50 2146.50,687.00 2146.50,687.00"
        ></path>
      </svg>
    </div>
  );
};

export default Background;