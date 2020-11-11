import Logo from '../public/images/jackknife-logo.svg'
import MapIcon from '../public/images/map-pin.svg'
import PhoneIcon from '../public/images/phone.svg'
import Image from 'next/image'
import Link from 'next/link'

function Index(props) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className={['columns', 'columns-center'].join(' ')}>
            <div className="column contentMargin">
              <Link href="/">
                <a className="heroLogo">
                  <Logo />
                </a>
              </Link>
              <p>
                Jackknife Pizza is a unique take on traditional Neapolitan style
                pizza. We provide a wide range of delicious and interesting
                topping combinations with a crispy sourdough crust.
              </p>
              <a
                className="info"
                href="https://www.google.com/maps/place/Saratoga+Speedway+Ltd/@49.8525957,-125.1364392,14.03z/data=!4m5!3m4!1s0x54881c810ddc98f7:0x99868eb4a2eadeb3!8m2!3d49.8536695!4d-125.137549"
              >
                <div className="infoIcon">
                  <MapIcon />
                </div>
                <div className="infoText">
                  <span>
                    <b>Saratoga Speedway</b>,{' '}
                    <span>Black Creek, British Columbia.</span>
                  </span>
                  <span className="secondary">
                    2380 Macaulay Rd, Black Creek, BC
                  </span>
                </div>
              </a>
              <a className="info" href="tel:7784280014">
                <div className="infoIcon">
                  <PhoneIcon />
                </div>
                <div className="infoText">
                  <span className="secondary">
                    Call for takeaway or delivery
                  </span>
                  <span className="phone">
                    <b>778 428 0014</b>
                  </span>
                </div>
              </a>
            </div>
            <div className="column">
              <div className="heroImageGrid">
                <div className="gridItem">
                  <Image
                    src="/images/finish2.jpg"
                    width="1600"
                    height="1066"
                    alt=""
                  />
                </div>
                <div className="gridItem">
                  <Image
                    src="/images/jim.jpg"
                    width="1600"
                    height="1066"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heroBackground">
          <Image src="/images/oven1.JPG" alt="" layout="fill" />
        </div>
      </div>
      <div></div>
      <style jsx>{`
        .hero {
          position: relative;
          color: var(--color-white);
          overflow: hidden;
          padding: 4rem 0 8rem 0;

          :global(p) {
            font-size: 1.25rem;
          }
        }

        .heroLogo {
          display: inline-block;

          :global(svg) {
            width: 15rem;
            max-width: 50vw;
            height: auto;
          }
        }

        .heroBackground {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: var(--color-black);

          :global(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.3;
          }
        }

        .container {
          display: block;
          margin: 0 auto;
          max-width: 1260px;
          padding: 0 2rem;
        }

        .columns {
          display: grid;
          grid-gap: 2rem;

          @media (min-width: 1000px) {
            grid-template-columns: 1fr 1fr;
          }
        }

        .columns-center {
          align-items: center;
        }

        .column {
        }

        .heroImageGrid {
          display: grid;
          grid-template-columns: 3fr 2fr 2fr;
          grid-template-rows: 1fr 1fr 1fr;
          position: relative;

          :global(> .gridItem) {
            &:nth-child(1) {
              grid-column: 2 / 4;
              grid-row: 1 / 3;

              :global(img) {
                filter: brightness(70%);
              }
            }
            &:nth-child(2) {
              grid-column: 1 / 3;
              grid-row: 2 / 4;
            }
          }
        }

        .contentMargin {
          max-width: 34rem;

          :global(> *) {
            &:not(:last-child) {
              margin-bottom: 1.5rem;
            }
          }
        }

        .info {
          display: grid;
          grid-template-columns: 2.5rem 1fr;
          grid-column-gap: 1rem;
          align-items: center;
        }

        .infoIcon {
          display: block;
          width: 100%;
          color: var(--color-red);

          :global(svg) {
            display: block;
            width: 100%;
            height: auto;
            color: var(--color-red);
          }
        }

        .phone {
          font-size: 1.25rem;
        }

        .secondary {
          opacity: 0.7;
          display: block;
        }

        .infoText {
          display: block;
        }

        span {
          display: inline-block;
        }
      `}</style>
    </>
  )
}

export default Index
