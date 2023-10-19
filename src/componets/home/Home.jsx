import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
          <header className={styles.cuerpo}>
            <img src="https://lh3.googleusercontent.com/pw/ADCreHd-1CHSrSVV_VF9-VBwoQITBlDduvEAc_UKlkXxt02-RgLz92qnmgG7B53qnDgA6Y5VLIVvgpD65SerAdNnQphYUr0oBjsSlR4L3QgFpKPJG-xM0IpgDoCBuTyOEKFZJtH0nS8BZk5WaXwikr8AraBkFGgCe1R5TWqk9BiJWMzD1-tUp9vs4r0d3a20bcdThO4g7QXtBPq0Lhe54SmHmal0EMSuqL1wDQhGS8BZrqAQKQxpZ7lik2lMnx4xekRUGlEvSz38hY4C475LCEWNjbqFgIJ3HZAcw12FYkYSbtCUzawfy7TzTVmBy49aRa0y21vkBuFifCb3ylRkpA8R-vR6ZkJqUCjQQU-q_DeA-o5HnRzmBc1DZvJTKrpFFe43OlFrTNZZ3bmmxYeg6_AeCqQzPnVo4shbas6YFdgfhFUAtx9bNNOaKmZiHTJvjELpnsj3Fu2ChOdCk9vg_LkD9LjjujJ_jWCz20ymv0NacozRxSpmY_nYdFxpyg7WWRIaoe_skURRaiQrcXdq5GQhdCDLu1jBJ6xJ5rEXqfHJp_r3kvZqvbX9CRjbANta_76iMTOsbEHAUm5AHU2a4g3wwQSpwsmsOJDeHMxytZlWqKVnYNcVNU4UAOfLRYdsXDpWQ-KdCGIG6bsViMDfTgk7spiq1MXxyThMBZdEWVPvVEVADd6aeAzzuwWOhORngtgdlLJHGF6am6DObzEktofZH5FUHAA8Cc8SEWoUNZVLSR7g8hmSZP99qtt2ewTTRw1NpQyECsFdLrq798T2DfPkAfct0Xcoan-HjYZsT9hMV7O5Mpcdk2_ERKdtRCO0I0g_-TdVM55wUCpN2tH3phWsLcYKmE0eCqnXOrj6iF5Ue8mHGfMVDTpKF1_YhYE6mVzBopmr4NeKoN-iE7p5pJ3sqo-W9A=w503-h651-s-no?authuser=0"  style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                opacity: 0.7,
              }} alt="Lucas Villalba" />
            <h1>Bienvenido a mi Portafolio</h1>
            <p>Lucas Antonio Villalba</p>
          </header>
          <section className={styles.bienvenido}>
            <h2>Bienvenido</h2>
            <p>¡Hola! Soy Lucas Antonio Villalba, y este es mi portafolio personal. Aquí puedes conocer un poco más sobre mí y explorar mis proyectos.</p>
          </section>
        </div>
      );
  }

export default Home;