import Logo from '../public/images/jackknife-logo.svg'
import MapIcon from '../public/images/map-pin.svg'
import PhoneIcon from '../public/images/phone.svg'
import Image from 'next/image'
import Link from 'next/link'

import data from '../data/menu.json'

function Index(props) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className={['columns', 'columns-center'].join(' ')}>
            <div className="column contentMargin textBlock">
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
      <div className="menu">
        <div className="container">
          <div className="paper contentMargin">
            <h2>Meat Pizzas</h2>
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
            <div className="menuImageGrid">
              <div className="gridItem">
                <Image
                  src="/images/prep3.jpg"
                  width="2000"
                  height="1275"
                  alt=""
                />
              </div>
              <div className="gridItem">
                <Image
                  src="/images/finish1.jpg"
                  width="2000"
                  height="1275"
                  alt=""
                />
              </div>
              <div className="gridItem">
                <Image
                  src="/images/bagels.jpg"
                  width="1440"
                  height="1440"
                  alt=""
                />
              </div>
            </div>
            <h2>Veggie Pizzas</h2>
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
            <h2>Bagel Sandwiches</h2>
            <div className="menuGrid">
              {data.sandwiches &&
                data.sandwiches.map(item => {
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
                <h2>Alterations</h2>
                <div className="menuList">
                  {data.alterations &&
                    data.alterations.map(item => {
                      return (
                        <div className="menuItemSmall">
                          <h3 className="itemName">{item.name}</h3>
                          <p className="itemPrice">{item.price}</p>
                        </div>
                      )
                    })}
                </div>
              </div>
              <div className="column contentMargin">
                <h2>Soup of the Day</h2>
                <div className="menuList">
                  {data.soup &&
                    data.soup.map(item => {
                      return (
                        <div className="menuItemSmall">
                          <h3 className="itemName">{item.name}</h3>
                          <p className="itemPrice">{item.price}</p>
                        </div>
                      )
                    })}
                </div>
                <h2>Island Style Bagels</h2>
                <div className="menuList">
                  {data.bagels &&
                    data.bagels.map(item => {
                      return (
                        <div className="menuItemSmall">
                          <h3 className="itemName">{item.name}</h3>
                          <p className="itemPrice">{item.price}</p>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        }

        .textBlock {
          max-width: 34rem;
        }

        .contentMargin {
          :global(> *) {
            &:not(:last-child) {
              margin-bottom: 1.75rem;
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
          margin-top: -4rem;
          margin-bottom: 2.5rem;
        }

        .paper {
          position: relative;
          background: var(--color-white);
          display: block;
          padding: 1.75rem 1.5rem 2.5rem 1.5rem;
          border-radius: 3px;
          box-shadow: var(--box-shadow);
          margin: 0 -1.25rem;

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

        .menuItemSmall {
          display: grid;
          grid-template-areas: 'name price' 'description description';
          grid-template-columns: 1fr auto;
          grid-template-rows: auto 1fr;
          align-self: stretch;
        }

        .itemName {
          margin: 0;
          grid-area: name;
          line-height: 1.2;
          font-size: 1.2rem;
          font-weight: 600;
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
          line-height: 1.2;
          font-size: 1.2rem;
          text-align: right;
          color: var(--color-red);
        }
      `}</style>
    </>
  )
}

export default Index
