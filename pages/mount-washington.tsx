import Logo from '../public/images/jackknife-logo.svg'
import MapIcon from '../public/images/map-pin.svg'
import PhoneIcon from '../public/images/phone.svg'
import TimeIcon from '../public/images/time.svg'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import data from '../data/menu-washington.json'

function Index(props) {
  return (
    <>
      <Head>
        <title>Jackknife Pizza –⁠ Mount Washington Location</title>
      </Head>
      <div className="hero">
        <div className="container">
          <div className={['columns', 'columns-center'].join(' ')}>
            <div className="column contentMargin textBlock">
              <Link href="/">
                <a className="heroLogo">
                  <Logo />
                </a>
              </Link>
              <h2>Mount Washington Location</h2>
              <p>
                Our food trailer is a unique, fully self contained wood fire
                pizza kitchen. We have it parked in the Sunrise Parking Lot at
                Mount Washington where it will remain through the 2020⁠–⁠⁠2021
                ski season. The team will be serving personal sized pizzas
                (roughly 10”), cooked to order. Hot chocolate and coffee are
                also available. Pizzas take around 5–⁠⁠⁠10 minutes to cook, so
                you can get a hot meal quickly and then get back out on the
                slopes.
              </p>
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
                    Fridays, Saturdays, Sundays & Holidays
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="heroImageGrid">
                <div className="gridItem">
                  <img src="/images/wood-oven.jpg" alt="" />
                </div>
                <div className="gridItem">
                  <img src="/images/mount-washington.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heroBackground blurred">
          <Image
            src="/images/mount-washington-trees.jpg"
            layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <div className="paper contentMargin">
            <h2>Menu</h2>
            <div className="menuGrid">
              {data &&
                data.map(item => {
                  return (
                    <div className="menuItem">
                      <h3 className="itemName">{item.name}</h3>
                      <span className="dots"></span>
                      <p className="itemDescription">{item.description}</p>
                      <p className="itemPrice">{item.price}</p>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="columns">
            <div className="column secondary">
              <p>© 2021 Jackknife Pizza </p>
            </div>
            <div className="column alignRight">
              <a
                href="https://www.facebook.com/jackknifepizza/"
                title="Facebook - Jackknife Pizza"
              >
                <b>Check out our facebook</b> for up to date information.
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          padding: 7rem 0 2rem 0;
        }

        .hero {
          position: relative;
          color: var(--color-white);
          overflow: hidden;
          padding: 4rem 0 9rem 0;
          border-bottom: 8px solid var(--color-red);

          :global(p) {
            font-size: 1.125rem;
            padding-bottom: 0.5rem;
          }
        }

        .heroLogo {
          display: inline-block;

          :global(svg) {
            width: 13rem;
            max-width: 50vw;
            height: auto;
            margin-bottom: 0.5rem;
          }
        }

        .reopening {
          display: inline-block;
          background: white;
          color: black;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 1.375rem;
          margin: 0.75rem 0 2.75rem 0 !important;

          :global(b) {
            display: inline-block;
            color: var(--color-red);
          }
        }

        .holidayHours.paper {
          margin: 0;
          margin-bottom: 0px;
          padding: 2rem 1.5rem 0 1.5rem;
          color: black;

          line-height: 1.4;
        }

        .hoursTable {
          width: calc(100% + 3rem);
          margin-left: -1.5rem;
          margin-right: -1.5rem;
          text-align: left;

          :global(th, td) {
            padding: 2px 10px;
            line-height: 1.4;
            text-align: left;
          }

          :global(th) {
            border-bottom: 2px solid black;
            &:first-child {
              padding-left: 1.5rem;
            }

            &:last-child {
              padding-right: 1.5rem;
            }
          }

          :global(td) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            &:first-child {
              padding-left: 1.5rem;
            }

            &:last-child {
              padding-right: 1.5rem;
            }
          }

          :global(tr:nth-child(2n) td) {
            background: rgba(0, 0, 0, 0.03);
          }

          :global(tr:last-child td) {
            padding-bottom: 1rem;
          }
        }

        .blurred {
          filter: blur(1.5px);
          transform-origin: 50% 50%;
          transform: scale3d(1.02, 1.02, 1);
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

        .columns {
          display: grid;
          grid-gap: 2rem;

          @media (min-width: 1000px) {
            grid-template-columns: 1fr 1fr;
          }
        }

        .alignRight {
          @media (min-width: 1000px) {
            text-align: right;
          }
        }

        .columns-center {
          align-items: center;
        }

        .column {
        }

        .heroImageGrid {
          display: grid;
          grid-template-columns: 3fr 3fr 2fr;
          grid-template-rows: 3fr 2fr 3fr;
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
              z-index: 2;
            }
          }
        }

        .menuImageGrid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          position: relative;
          margin: 0 -3rem;
          padding: 0.5rem 0;

          @media (min-width: 1000px) {
            margin: 2rem -4.5rem;
          }

          :global(> .gridItem) {
            &:nth-child(1) {
              grid-column: 1 / 3;
              grid-row: 1 / 3;
            }
            &:nth-child(2) {
              grid-column: 2 / 5;
              grid-row: 2 / 4;
            }
            &:nth-child(3) {
              grid-column: 4 / 6;
              grid-row: 1 / 3;
            }
          }
        }

        :global(img) {
          border-radius: 3px;
          box-shadow: var(--box-shadow);
          overflow: hidden;
          width: 100%;
          height: auto;
        }

        .textBlock {
          max-width: 34rem;
        }

        .contentMargin {
          :global(> *) {
            &:not(:last-child) {
              margin-bottom: 1rem;
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

        .menu {
          margin-top: -5rem;
          margin-bottom: -5rem;
          display: block;
          overflow: hidden;
        }

        .paper {
          position: relative;
          background: url('/images/paper.png'), white;
          display: block;
          padding: 1.75rem 1.5rem 2.5rem 1.5rem;
          border-radius: 3px;
          box-shadow: var(--box-shadow);
          margin: 0 -1.25rem;
          z-index: 20;

          @media (min-width: 1000px) {
            margin: 0 -2.25rem;
            padding: 3.5rem 3.25rem 4.5rem 3.25rem;
          }
        }

        .menuList {
          display: grid;
          grid-row-gap: 1rem;
        }

        .menuGrid {
          display: grid;
          grid-gap: 1.5rem 1.5rem;
          padding-bottom: 1rem;

          @media (min-width: 600px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem 3rem;
          }

          @media (min-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .menuItem {
          display: grid;
          grid-template-areas: 'name dots price' 'description description description';
          grid-template-columns: auto 1fr auto;
          grid-template-rows: auto 1fr;
          align-self: stretch;
        }

        .menuItemSmall {
          display: grid;
          grid-template-areas: 'name dots price' 'description description description';
          grid-template-columns: auto 1fr auto;
          grid-template-rows: auto 1fr;
          align-self: stretch;
        }

        .dots {
          display: block;
          grid-area: dots;
          width: 100%;
          margin: 0 -0.5rem;
          opacity: 1;
          transform: translate3d(0, -4px, 0);
          border-bottom: 3px dotted rgba(0, 0, 0, 0.1);
        }

        .itemName {
          margin: 0;
          grid-area: name;
          line-height: 1;
          font-size: 1.2rem;
          font-weight: 600;
          margin-right: 1rem;
        }

        .itemNameSmall {
          font-size: 1rem;
          font-weight: 500;
        }

        .itemName--small {
          font-size: 1rem;
          font-weight: 400;
        }

        .itemDescription {
          margin: 0;
          line-height: 1.2;
          grid-area: description;
          margin-top: 0.5rem;
          align-self: flex-start;
          color: var(--color-dark);
        }

        .itemPrice {
          margin: 0;
          grid-area: price;
          line-height: 1;
          font-size: 1.2rem;
          text-align: right;
          color: var(--color-red);
        }
      `}</style>
    </>
  )
}

export default Index
