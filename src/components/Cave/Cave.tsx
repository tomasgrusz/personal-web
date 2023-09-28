import styles from './Cave.module.scss';

const Cave = ({ flip = false }) => {
  return (
    <div className={styles.Cave}>
      <svg
        className={`${styles.Cave} ${flip ? styles.flip : ''}`}
        width="1920"
        height="500"
        viewBox="0 0 1920 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.layer5}
          d="M 1420.00,62.00
           C 1265.50,59.00 1147.50,240.00 1357.50,220.50
             1458.00,213.00 1500.00,469.50 1500.00,469.50
             1500.00,469.50 1524.00,305.50 1581.00,287.50
             1638.00,269.50 1665.00,397.50 1665.00,397.50
             1665.00,397.50 1719.00,226.50 1717.50,289.50
             1722.00,327.00 1740.00,208.50 1782.00,192.00
             1799.59,151.80 2246.31,168.31 2728.50,254.50
             2728.50,254.50 2923.50,302.50 2985.00,266.50
             3046.50,230.50 3428.50,314.00 3428.50,314.00
             3428.50,314.00 3424.00,53.00 3424.00,53.00
             3424.00,53.00 1408.00,123.50 1420.00,62.00 Z
           M 1731.00,328.50"
        ></path>
        <path
          className={styles.layer4}
          d="M 16.00,-23.00
           C -138.50,-26.00 -231.00,237.00 -21.00,217.50
             79.50,210.00 96.00,342.00 96.00,342.00
             96.00,342.00 120.00,220.50 177.00,202.50
             234.00,184.50 264.00,303.00 264.00,303.00
             264.00,303.00 306.00,183.00 310.50,220.50
             315.00,258.00 333.00,244.50 382.50,210.00
             432.00,175.50 493.50,328.50 493.50,328.50
             493.50,328.50 538.50,184.50 603.00,213.00
             667.50,241.50 688.50,226.50 688.50,226.50
             688.50,226.50 724.50,249.00 739.50,295.50
             744.00,315.00 772.50,214.50 798.00,228.00
             823.50,241.50 873.00,310.50 919.50,189.00
             996.00,133.50 1000.50,342.00 1009.50,325.50
             1027.50,285.00 1071.00,133.50 1080.00,184.50
             1089.00,235.50 1324.50,169.50 1324.50,169.50
             1324.50,169.50 1519.50,217.50 1581.00,181.50
             1642.50,145.50 2024.50,229.00 2024.50,229.00
             2024.50,229.00 2020.00,-32.00 2020.00,-32.00
             2020.00,-32.00 4.00,38.50 16.00,-23.00 Z"
        ></path>
        <path
          className={styles.layer3}
          d="M -1253.00,-35.00
           C -1407.50,-38.00 -1454.00,223.00 -1244.00,203.50
             -1143.50,196.00 -1133.00,280.00 -1133.00,280.00
             -1133.00,280.00 -1121.00,226.00 -1064.00,208.00
             -1007.00,190.00 -987.50,269.50 -987.50,269.50
             -987.50,269.50 -957.50,307.00 -953.00,344.50
             -948.50,382.00 -956.00,298.00 -906.50,263.50
             -857.00,229.00 -728.00,214.00 -728.00,214.00
             -728.00,214.00 -618.50,197.50 -554.00,226.00
             -489.50,254.50 -468.50,292.00 -468.50,292.00
             -468.50,292.00 -465.50,302.50 -450.50,349.00
             -435.50,395.50 -440.00,277.00 -414.50,290.50
             -389.00,304.00 -407.00,356.50 -360.50,235.00
             -296.00,161.50 -177.50,278.50 -146.00,235.00
             -104.00,236.50 -105.50,262.00 -96.50,313.00
             -87.50,364.00 -66.50,388.00 -66.50,388.00
             -66.50,388.00 -72.50,487.00 -38.00,335.50
             -3.50,184.00 -1.66,211.79 56.50,289.00
             80.50,245.50 91.00,230.50 119.50,230.50
             184.00,236.50 310.00,269.50 371.50,233.50
             433.00,197.50 500.50,238.00 500.50,238.00
             500.50,238.00 556.00,275.50 568.00,316.00
             580.00,356.50 590.50,383.50 590.50,383.50
             590.50,383.50 617.50,319.00 626.50,287.50
             673.00,244.00 755.50,217.00 755.50,217.00
             755.50,217.00 751.00,-44.00 751.00,-44.00
             751.00,-44.00 -1265.00,26.50 -1253.00,-35.00 Z
           M -807.50,-164.00"
        ></path>
        <path
          className={styles.layer2}
          d="M 971.00,-42.00
           C 816.50,-45.00 770.00,216.00 980.00,196.50
             1080.50,189.00 1091.00,273.00 1091.00,273.00
             1091.00,273.00 1103.00,219.00 1160.00,201.00
             1217.00,183.00 1236.50,262.50 1236.50,262.50
             1236.50,262.50 1266.50,300.00 1271.00,337.50
             1275.50,375.00 1268.00,291.00 1317.50,256.50
             1367.00,222.00 1496.00,207.00 1496.00,207.00
             1496.00,207.00 1605.50,190.50 1670.00,219.00
             1734.50,247.50 1755.50,285.00 1755.50,285.00
             1755.50,285.00 1758.50,295.50 1773.50,342.00
             1788.50,388.50 1784.00,270.00 1809.50,283.50
             1835.00,297.00 1817.00,349.50 1863.50,228.00
             1928.00,154.50 2046.50,271.50 2078.00,228.00
             2120.00,229.50 2118.50,255.00 2127.50,306.00
             2136.50,357.00 2157.50,381.00 2157.50,381.00
             2157.50,381.00 2151.50,480.00 2186.00,328.50
             2220.50,177.00 2222.34,204.79 2280.50,282.00
             2304.50,238.50 2315.00,223.50 2343.50,223.50
             2408.00,229.50 2534.00,262.50 2595.50,226.50
             2657.00,190.50 2724.50,231.00 2724.50,231.00
             2724.50,231.00 2780.00,268.50 2792.00,309.00
             2804.00,349.50 2814.50,376.50 2814.50,376.50
             2814.50,376.50 2841.50,312.00 2850.50,280.50
             2897.00,237.00 2979.50,210.00 2979.50,210.00
             2979.50,210.00 2975.00,-51.00 2975.00,-51.00
             2975.00,-51.00 959.00,19.50 971.00,-42.00 Z
           M 1416.50,-171.00"
        ></path>
        <path
          className={styles.layer1}
          d="M 24.00,-48.00
           C -130.50,-51.00 -169.50,205.50 40.50,186.00
             141.00,178.50 144.00,267.00 144.00,267.00
             144.00,267.00 156.00,213.00 213.00,195.00
             270.00,177.00 289.50,256.50 289.50,256.50
             289.50,256.50 319.50,294.00 324.00,331.50
             328.50,369.00 321.00,285.00 370.50,250.50
             420.00,216.00 549.00,201.00 549.00,201.00
             549.00,201.00 658.50,184.50 723.00,213.00
             787.50,241.50 808.50,279.00 808.50,279.00
             808.50,279.00 811.50,289.50 826.50,336.00
             841.50,382.50 837.00,264.00 862.50,277.50
             888.00,291.00 870.00,343.50 916.50,222.00
             981.00,148.50 1099.50,265.50 1131.00,222.00
             1173.00,223.50 1171.50,249.00 1180.50,300.00
             1189.50,351.00 1210.50,375.00 1210.50,375.00
             1210.50,375.00 1204.50,474.00 1239.00,322.50
             1273.50,171.00 1275.34,198.79 1333.50,276.00
             1357.50,232.50 1368.00,217.50 1396.50,217.50
             1461.00,223.50 1587.00,256.50 1648.50,220.50
             1710.00,184.50 1777.50,225.00 1777.50,225.00
             1777.50,225.00 1833.00,262.50 1845.00,303.00
             1857.00,343.50 1867.50,370.50 1867.50,370.50
             1867.50,370.50 1894.50,306.00 1903.50,274.50
             1950.00,231.00 2032.50,204.00 2032.50,204.00
             2032.50,204.00 2028.00,-57.00 2028.00,-57.00
             2028.00,-57.00 12.00,13.50 24.00,-48.00 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Cave;