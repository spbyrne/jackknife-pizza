import Logo from '../public/images/jackknife-logo.svg'
import MapIcon from '../public/images/map-pin.svg'
import PhoneIcon from '../public/images/phone.svg'
import TimeIcon from '../public/images/time.svg'
import Image from 'next/image'
import Link from 'next/link'

import data from '../data/menu.json'

function Index(props) {
  return (
    <>
      <div className="home">
        <div className="container center">
          <Link href="/">
            <a className="heroLogo">
              <Logo />
            </a>
          </Link>
        </div>
        <div className="spacer"></div>
        <div className="container">
          <p>
            Jackknife Pizza is dedicated to creating high quality artisan pizza
            and baked goods. Our take out store front is located in Black Creek
            at the Saratoga Speedway through the Macaulay Road entrance. Our
            second location is our food trailer, serving wood fire pizza. The
            trailer is located at Mount Washington, in the Sunrise Parking lot,
            for the duration of the 2020-21 ski season.
          </p>
        </div>
        <div className="spacer"></div>
        <div className="container">
          <div className="columns">
            <div className="card">
              <div className="locationImageWrapper">
                <img src="images/black-creek.jpg" alt="" />
              </div>
              <div className="cardContent">
                <div className="info">
                  <div className="infoIcon"></div>
                  <div className="infoText">
                    <h2 className="locationTitle">Black Creek</h2>
                  </div>
                </div>
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
                <div className="info">
                  <div className="infoIcon">
                    <TimeIcon />
                  </div>
                  <div className="infoText">
                    <span className="phone">
                      Open <b>4pm – 8pm</b>
                    </span>
                    <span className="secondary">Wednesday – Sunday</span>
                  </div>
                </div>
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
            </div>
            <div className="card">
              <div className="locationImageWrapper">
                <img src="images/mount-washington.jpg" alt="" />
              </div>
              <div className="cardContent">
                <div className="info">
                  <div className="infoIcon"></div>
                  <div className="infoText">
                    <h2 className="locationTitle">Mount Washington</h2>
                  </div>
                </div>
                <a
                  className="info"
                  href="https://www.google.com/maps/place/Mount+Washington+Skiing+Alpine+Resort/@49.7415308,-125.3012318,15z/data=!4m5!3m4!1s0x0:0x2587a153025666e6!8m2!3d49.7415308!4d-125.3012318"
                >
                  <div className="infoIcon">
                    <MapIcon />
                  </div>
                  <div className="infoText">
                    <span>
                      <b>Sunrise Parking Lot</b> at <b>Mount Washington</b>
                    </span>
                    <span className="secondary">
                      1 Strathcona Pkwy, Comox-Strathcona C, BC
                    </span>
                  </div>
                </a>
                <div className="info">
                  <div className="infoIcon">
                    <TimeIcon />
                  </div>
                  <div className="infoText">
                    <span className="phone">
                      Open <b>10:30am – 4:00pm</b>
                    </span>
                    <span className="secondary">
                      Saturdays, Sundays & Holidays
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heroBackground">
          <img src="/images/oven1.jpg" alt="" />
        </div>
      </div>
      <style jsx>{`
        .footer {
          position: relative;
          color: var(--color-white);
          overflow: hidden;
          padding: 8rem 0 4rem 0;
          border-top: 8px solid var(--color-red);
        }

        .home {
          position: relative;
          color: var(--color-white);
          overflow: hidden;
          padding: 4rem 0 9rem 0;
          min-height: 100vh;

          :global(p) {
            font-size: 1.25rem;
          }
        }

        .heroLogo {
          :global(svg) {
            width: 12rem;
            max-width: 50vw;
            height: auto;
            margin-bottom: 0.5rem;
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
          max-width: 1360px;
          padding: 0 2rem;
        }

        .center {
          display: flex;
          justify-content: center;
        }

        .spacer {
          display: block;
          width: 100%;
          height: 3rem;
        }

        .columns {
          display: grid;
          grid-gap: 2rem;

          @media (min-width: 1000px) {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card {
          position: relative;
          background: black;
          border-radius: 3px;
          box-shadow: var(--box-shadow);
        }

        .cardContent {
          padding: 1.5rem 2rem 2rem 2rem;
          position: relative;
          z-index: 2;

          :global(> *) {
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }

        .locationImageWrapper {
          position: relative;
          width: 100%;
          padding-bottom: 80%;
          margin-bottom: -8rem;
          height: 0;
          overflow: hidden;
          mask-image: linear-gradient(
            to top,
            transparent,
            rgba(255, 255, 255, 0.3) 20%,
            white 40%
          );

          :global(img) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            margin: 0;
            border-radius: 3px;
            box-shadow: var(--box-shadow);
          }
        }

        .locationTitle {
          position: relative;
          text-align: center;
          font-size: 1.875rem;
          margin: 0 0 1.5rem 0;
          display: flex;

          &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: -1.125rem;
            left: 0;
            width: 5rem;
            height: 2px;
            background: white;
            opacity: 0.3;
          }
        }

        .infoIcon {
          display: block;
          height: 100%;
          color: var(--color-red);
          margin-right: 1rem;

          :global(svg) {
            display: block;
            height: 100%;
            width: auto;
            color: var(--color-red);
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
