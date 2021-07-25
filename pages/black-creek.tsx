import Logo from '../public/images/jackknife-logo.svg'
import MapIcon from '../public/images/map-pin.svg'
import PhoneIcon from '../public/images/phone.svg'
import TimeIcon from '../public/images/time.svg'
import DeliveryIcon from '../public/images/delivery.svg'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import data from '../data/menu.json'

function Index(props) {
  return (
    <>
      <Head>
        <title>Jackknife Pizza –⁠ Black Creek Location</title>
        <meta
          name="og:description"
          property="og:description"
          content="We provide a wide range of delicious and interesting topping combinations with a crispy sourdough crust. We also offer fresh bagels through the Black Creek location."
        />
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
              <h2 className="locationName">Black Creek Location</h2>
              <p>
                Jackknife Pizza provides a wide range of delicious and
                interesting topping combinations with a crispy sourdough crust.
                We also offer fresh bagels daily through our Black Creek
                location.
              </p>

              <a
                className="info"
                href="https://www.google.com/maps/place/Saratoga+Speedway+Ltd/@49.8525957,-125.1364392,14.03z/data=!4m5!3m4!1s0x54881c810ddc98f7:0x99868eb4a2eadeb3!8m2!3d49.8536695!4d-125.137549"
              >
                <div className="infoIcon">
                  <MapIcon />
                </div>
                <div className="infoText">
                  <span className="phone">
                    <b>Saratoga Speedway</b>
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
                <div className="infoTextSplit">
                  <div className="infoTextLeft">
                    <span className="phone">
                      <b>3pm</b> – <b>9pm</b>
                    </span>
                    <span className="secondary">Wednesday & Thursday</span>
                  </div>
                  <div className="infoTextRight">
                    <span className="phone">
                      <b>12pm</b> – <b>9pm</b>
                    </span>
                    <span className="secondary">Friday – Sunday</span>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="infoIcon">
                  <DeliveryIcon />
                </div>
                <div className="infoText">
                  <span className="phone">
                    Delivery from <b>York Rd</b> to <b>Howard Rd</b>
                  </span>
                  <span className="secondary">
                    Available until time slots fill up
                  </span>
                </div>
              </div>
              <a className="info" href="tel:7784280014">
                <div className="infoIcon">
                  <PhoneIcon />
                </div>
                <div className="infoText">
                  <span className="secondary">
                    Call for takeaway or delivery.
                  </span>
                  <span className="phone">
                    <b>778 428 0014</b>
                  </span>
                  <span className="tertiary">
                    Card payments accepted over the phone or cash on delivery.
                  </span>
                </div>
              </a>
            </div>
            <div className="column">
              <div className="heroImageGrid">
                <div className="gridItem">
                  <img src="/images/black-creek.jpg" alt="" />
                </div>
                <div className="gridItem">
                  <Image
                    src="/images/pizzatomato.jpg"
                    width="960"
                    height="917"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heroBackground">
          <Image src="/images/pizzas.jpg" layout="fill" alt="" />
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <div className="paper contentMargin">
            <h2 className="menu-title">Meat Pizzas</h2>
            <p className="subtitle">14″ crispy sourdough crust</p>
            <div className="menuGrid">
              {data.meat &&
                data.meat.map(item => {
                  return (
                    <div className="menuItem">
                      <h3 className="itemName">{item.name}</h3>
                      <p className="itemDescription">{item.description}</p>
                      <p className="itemPrice">{item.price}</p>
                    </div>
                  )
                })}
            </div>
            <h2 className="menu-title">Veggie Pizzas</h2>
            <p className="subtitle">14″ crispy sourdough crust</p>
            <div className="menuGrid">
              {data.veggie &&
                data.veggie.map(item => {
                  return (
                    <div className="menuItem">
                      <h3 className="itemName">{item.name}</h3>
                      <p className="itemDescription">{item.description}</p>
                      <p className="itemPrice">{item.price}</p>
                    </div>
                  )
                })}
            </div>
            <h2 className="menu-title">Other Pizzas</h2>
            <div className="menuGrid">
              {data.other &&
                data.other.map(item => {
                  return (
                    <div className="menuItem">
                      <h3 className="itemName">{item.name}</h3>
                      <p className="itemDescription">{item.description}</p>
                      <p className="itemPrice">{item.price}</p>
                    </div>
                  )
                })}
            </div>
            <div className="columns">
              <div className="column contentMargin">
                <h3 className="menu-title--small">Alterations</h3>
                <div className="menuList">
                  {data.alterations &&
                    data.alterations.map(item => {
                      return (
                        <div className="menuItemSmall">
                          <h4 className="itemName itemNameSmall">
                            {item.name}
                          </h4>
                          <span className="dots"></span>
                          <p className="itemPrice">{item.price}</p>
                        </div>
                      )
                    })}
                </div>
              </div>
              <div className="column contentMargin">
                <h3 className="menu-title--small">Dips</h3>
                <div className="menuList">
                  {data.dips &&
                    data.dips.map(item => {
                      return (
                        <div className="menuItemSmall">
                          <h4 className="itemName itemNameSmall">
                            {item.name}
                          </h4>
                          <span className="dots"></span>
                          <p className="itemPrice">{item.price}</p>
                        </div>
                      )
                    })}
                </div>
                <h3 className="menu-title--small">Island Style Bagels</h3>
                <p className="subtitle">
                  Fresh bagels available on Wednesday and Thursday. Frozen
                  bagels available in store any time during open hours.
                </p>
                <div className="menuList">
                  {data.bagels &&
                    data.bagels.map(item => {
                      return (
                        <div className="menuItemSmall">
                          <h4 className="itemName itemNameSmall">
                            {item.name}
                          </h4>
                          <span className="dots"></span>
                          <p className="itemPrice">{item.price}</p>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
            <div className="menu-footer">
              <p>
                * All combos are subject to extra charges from the “Alterations
                & Extras” section.
              </p>
              <p>
                * Extra salad containers and utensils are complimentary with
                combo meal purchases.
              </p>
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
        <div className="heroBackground">
          <img src="/images/pizzas.jpg" alt="" />
        </div>
      </div>
      <style jsx>{`
        .menu-title {
          margin-bottom: 1.75rem !important;
        }

        .menu-title:not(:first-child) {
          margin-top: 2.25rem;
        }

        .menu-title--small {
          margin-bottom: 1.5rem !important;
        }

        .menu-title--small:not(:first-child) {
          margin-top: 2rem;
        }

        .menu-footer {
          font-style: italic;
          opacity: 0.7;
          text-align: center;
          margin-top: 2rem;
        }

        .menu-footer p:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        .footer {
          position: relative;
          color: var(--color-white);
          overflow: hidden;
          padding: 8rem 0 4rem 0;
          border-top: 8px solid var(--color-red);
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
          cursor: pointer;

          :global(svg) {
            width: 13rem;
            max-width: 50vw;
            height: auto;
          }
        }

        .locationName {
          margin-top: 1rem;
          margin-bottom: 1.5rem !important;
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
            opacity: 0.25;
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

        .subtitle {
          margin-top: -0.5rem;
          padding-bottom: 1rem;
        }

        .addition {
          margin-top: -0.75rem;
          padding-bottom: 0.75rem;
          font-style: italic;
          opacity: 0.5;
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
              margin-bottom: 1.25rem;
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

        .infoTextSplit {
          display: flex;
        }

        .infoTextLeft {
          padding-right: 1rem;
          margin-right: 1rem;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            border-radius: 1px;
            top: 50%;
            right: 0;
            width: 2px;
            height: 66%;
            transform: translate3d(50%, -50%, 0);
            background: white;
            opacity: 0.3;
          }
        }

        .infoTextRight {
        }

        .phone {
          font-size: 1.125rem;
        }

        .secondary {
          opacity: 0.7;
          display: block;
        }

        .tertiary {
          opacity: 0.7;
          display: block;
          font-style: italic;
          font-size: 0.8rem;
          margin-top: 0rem;
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
          grid-template-areas: 'name price' 'description description';
          grid-template-columns: 1fr auto;
          grid-template-rows: auto 1fr;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
          align-self: stretch;
        }

        .salad {
          display: grid;
          grid-gap: 0.5rem;
          align-content: start;
        }

        .saladName {
          margin: 0;
          line-height: 1;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .saladDescription {
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
          align-self: flex-start;
          color: var(--color-dark);
        }

        .saladPrice {
          width: 100%;
          justify-content: space-between;
          display: flex;
          align-items: bottom;
        }

        .saladDots {
          flex: 1 0 auto;
          margin: 0 0.5rem;
          opacity: 1;
          transform: translate3d(0, -4px, 0);
          border-bottom: 3px dotted rgba(0, 0, 0, 0.1);
        }

        .priceName {
          flex: 0 0 auto;
          margin: 0;
          line-height: 1.25;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .priceNumber {
          flex: 0 0 auto;
          line-height: 1;
          font-size: 1rem;
          text-align: right;
          color: var(--color-red);
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
          transform: translate3d(0, -6px, 0);
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
          line-height: 1.3;
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
