import React from 'react';
import styles from './PortfolioFeatures.module.css';

const PortfolioFeatures = () => {
  return (
    <section className={styles.container2}>
      <h1 className={styles.title}>
        Empowering Students: <br /> Easy Features for Your Success
      </h1>
      <p className={styles.description}>
        Embark on a journey of self-discovery and career advancement with PortfoliOH by your side.
      </p>
      <div className={styles.featureContainer}>
        <div className={styles.featureContent}>
          <div className={styles.featureColumns}>
            <div className={styles.column}>
              <div className={styles.featureText}>
                <h2 className={styles.featureTitle}>Achieve skills by uploading evidences</h2>
                <p className={styles.featureDescription}>
                  Seamlessly upload evidence of your achievements, from work-based learning to earn certificates.
                </p>
                <button className={styles.learnMoreButton}>
                  <div className={styles.buttonContent}>
                    <span className={styles.buttonText}>Learn More</span>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dbc25415abc99b4c0dd024ea9f42b6dced4e3d3fdc9b381f788a40a20608dca?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="" className={styles.buttonIcon} />
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.column}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/920e72bb343a5cd0fb87704fce5efad730bb20fb1bbd59a06ea1d12c4bec602b?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Feature illustration" className={styles.featureImage} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sealSection}>
        <div className={styles.sealColumns}>
          <div className={styles.column}>
            <div className={styles.sealContainer}>
              <h2 className={styles.sealTitle}>Unlock Seals with PortfoliOH's Gamification</h2>
              <p className={styles.sealDescription}>
                The gamified experience recognizes and celebrates your progress and growth every step of the way.
              </p>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneHeader}>
                  <div className={styles.phoneTime}>9:41</div>
                  <div className={styles.phoneIcons}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6369ab160441952101c19ee9cae24f556d8479586f2ac79265618a8d08fdf7b3?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="WiFi" className={styles.wifiIcon} />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9691d8b7a1979cade00ce66ac68a8c3abd5a3fd538fc67c6aac238f41196ca8b?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Battery" className={styles.batteryIcon} />
                  </div>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f89bec4e995150b415fe2219bfd8405146a5271e80a60f0cc1aa79731726f24?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Notch" className={styles.notchIcon} />
                <div className={styles.sealContent}>
                  <div>
                    <h3 className={styles.sealInfo}>Seals</h3>
                    <p className={styles.sealSubInfo}>Choose your preferred seal</p>
                  </div>
                  <div className={styles.toggleButtons}>
                    <button className={styles.skillsButton}>Skills</button>
                    <button className={styles.sealsButton}>Seals</button>
                  </div>
                </div>
                <input type="text" placeholder="Search" className={styles.searchBar} />
                <div className={styles.sealGrid}>
                  <div className={styles.sealItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2313486ccdfe07ca8f8315818f978d1acdc8b90260e11fe0ae099550e1511ca?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="OMJ - Readiness Seal" className={styles.sealIcon} />
                    <p className={styles.sealLabel}>
                      OMJ - Readiness <br /> Seal
                    </p>
                  </div>
                  <div className={styles.sealItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7384587e0df1bcf75ad850a49091295145a7940ac1433c62ce30e8b49bc7a05?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Science Seal" className={styles.sealIcon} />
                    <p className={styles.sealLabel}>Science Seal</p>
                  </div>
                  <div className={styles.sealItem}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc109402d245a5ce1e382deecdb7157603aa3865a71e0c3523f59999778bcd5?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Credential Seal" className={styles.sealIcon} />
                    <p className={styles.sealLabel}>Credential Seal</p>
                  </div>
                </div>
                <div className={styles.sealFooter}>
                  <div className={styles.footerIcon}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2d76a7e51bf2523c32e2df90a77ca3c3bcf1c1c3b935a11d38c5115a9fc551?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Footer icon 1" className={styles.footerImage} />
                  </div>
                  <div className={styles.footerIcon}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c881f3eb35db36c8e3d8ed0667395d7f6ce3ba7bb74cc268de14af817f4cee?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Footer icon 2" className={styles.footerImage} />
                  </div>
                  <div className={styles.footerIcon}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50cd053ea47d7e94953b0d5f59c057a75f957718f90de1656e593fe742005382?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Footer icon 3" className={styles.footerImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.skillSection}>
              <h2 className={styles.skillTitle}>Skill Enhancement</h2>
              <p className={styles.skillDescription}>
                A transformative learning experience that provides a platform for continuous skill improvement.
              </p>
              <div className={styles.skillPhoneFrame}>
                <div className={styles.skillPhoneHeader}>
                  <div className={styles.phoneHeader}>
                    <div className={styles.skillPhoneTime}>9:41</div>
                    <div className={styles.skillPhoneIcons}>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f52c77250aaa2dbd8d0075d956ef880aeb479483c78f20208571d9850ae696?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="WiFi" className={styles.skillWifiIcon} />
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1493fec4fa2e54f5514b552dbd22ff422ac7677d1cd45230b06e80031fb4741?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Battery" className={styles.skillBatteryIcon} />
                    </div>
                  </div>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f89bec4e995150b415fe2219bfd8405146a5271e80a60f0cc1aa79731726f24?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Notch" className={styles.skillNotchIcon} />
                </div>
                <div className={styles.skillContent}>
                  <div>
                    <h3 className={styles.skillInfo}>Skill Tree</h3>
                    <p className={styles.skillSubInfo}>Choose your preferred skill</p>
                  </div>
                  <div className={styles.skillToggleButtons}>
                    <button className={styles.skillsActiveButton}>Skills</button>
                    <button className={styles.sealsInactiveButton}>Seals</button>
                  </div>
                </div>
                <div className={styles.skillSearchBars}>
                  <input type="text" placeholder="Search" className={styles.skillSearchInput} />
                  <div className={styles.skillStatusDropdown}>
                    <div className={styles.skillStatusContent}>
                      <span className={styles.skillStatusText}>Status</span>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13cd5a279c4d652a3541fde8b3c557adc86f8a0ee54d93eec3f2379128f0babe?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Dropdown" className={styles.skillStatusIcon} />
                    </div>
                  </div>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d19d2fd041195850c06eca8fbcc7d1d4bb757adb92bcaf595039a41ba6901e?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Skill Tree" className={styles.skillTreeImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeatures;