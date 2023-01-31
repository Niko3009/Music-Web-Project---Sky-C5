import styled from 'styled-components'

export const CenterBlockStyle = styled('div')`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 110px;

    & {
        .centerblock {
            &__search {
                width: 100%;
                border-bottom: 1px solid #4e4e4e;
                margin-bottom: 51px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            &__h2 {
                font-style: normal;
                font-weight: 400;
                font-size: 64px;
                line-height: 72px;
                letter-spacing: -0.8px;
                margin-bottom: 45px;
            }

            &__filter {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 51px;
            }

            &__content {
                display: flex;
                flex-direction: column;
            }
        }

        .search {
            &__svg {
                width: 17px;
                height: 17px;
                margin-right: 5px;
                stroke: #ffffff;
                fill: transparent;
            }

            &__text {
                flex-grow: 100;
                background-color: transparent;
                border: none;
                padding: 13px 10px 14px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #ffffff;

                &::placeholder {
                    background-color: transparent;
                    color: #ffffff;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }

        .filter {
            &__title {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-right: 15px;
            }

            &__button {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                border: 1px solid #ffffff;
                border-radius: 60px;
                padding: 6px 20px;

                cursor: pointer;

                &:hover {
                    border: 1px solid #d9b6ff;
                    color: #d9b6ff;
                }

                &:not(:last-child) {
                    margin-right: 10px;
                }
            }

            &__selection {
                border-color: #ad61ff;
                color: #ad61ff;
                cursor: pointer;

                &:hover {
                    border: 1px inset;
                    border-color: #ad61ff;
                }
            }

            &__current {
                border-color: #0088ff;
                color: #0088ff;
                cursor: pointer;

                &:hover {
                    border: 1px inset;
                    border-color: #0088ff;
                }
            }
        }

        .filterListBox {
            position: absolute;
            left: -1400px;

            background-color: #313131;
            border-radius: 12px;

            padding: 20px;

            & > div {
                width: 220px;
                min-height: 20px;
                max-height: 280px;

                display: flex;
                flex-direction: column;
                align-items: flex-start;

                gap: 10px;

                overflow-y: auto;
            }

            & span {
                color: #ffffff;
                cursor: pointer;

                &:hover {
                    color: #b672ff;
                    text-decoration: underline;
                }
            }

            &_author {
                left: 450px;
            }

            &_release {
                left: 600px;
            }

            &_genre {
                left: 750px;
            }
        }

        .content {
            &__title {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 24px;
            }

            &__playlist {
                display: flex;
                flex-direction: column;
                overflow-y: auto;
            }
        }

        .playlist-title {
            &__col {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 2px;
                color: #696969;
                text-transform: uppercase;
            }

            &__svg {
                width: 12px;
                height: 12px;
                fill: transparent;
                stroke: #696969;
            }
        }

        .col01 {
            width: 447px;
        }

        .col02 {
            width: 321px;
        }

        .col03 {
            width: 245px;
        }

        .col04 {
            width: 60px;
            text-align: end;
        }

        .playlist {
            &__item {
                width: 100%;
                display: block;
                margin-bottom: 12px;
            }

            &__track {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        .playlist-plug {
            & div * {
                background-color: #313131;
            }
        }

        .track {
            &__title {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 447px;
            }

            &__title-image {
                width: 51px;
                height: 51px;
                padding: 16px;
                background: #313131;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 17px;
            }

            &__title-svg {
                width: 18px;
                height: 17px;
                fill: transparent;
                stroke: #4e4e4e;
            }

            //&__title-text {}

            &__title-link {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #ffffff;
            }

            &__title-span {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #4e4e4e;
            }

            &__author {
                width: 321px;
                display: flex;
                justify-content: flex-start;
            }

            &__author-link {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #ffffff;
                text-align: left;
            }

            &__album {
                width: 245px;
            }

            &__album-link {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #696969;
            }

            //&__time {}

            &__time-svg {
                width: 14px;
                height: 12px;
                margin-right: 17px;
                fill: transparent;
                stroke: #696969;
            }

            &__time-text {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                text-align: right;
                color: #696969;
            }
        }
    }
`
