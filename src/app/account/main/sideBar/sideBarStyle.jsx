import styled from 'styled-components'

export const SideBarStyle = styled('div')`
    max-width: 418px;
    padding: 20px 90px 20px 78px;

    & {
        .sidebar {
            &__personal {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                padding: 12px 0 15px 0;
            }

            &__personal-name {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #ffffff;
                margin-right: 16px;
            }

            &__avatar {
                width: 43px;
                height: 43px;
                background-color: #313131;
                border-radius: 50%;
            }

            &__block {
                height: 100%;
                padding: 240px 0 0 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }

            &__list {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            &__item {
                width: 250px;
                height: 150px;

                &:not(:last-child) {
                    margin-bottom: 30px;
                }
            }

            &__link {
                width: 100%;
                height: 100%;
            }

            &__img {
                width: 100%;
                height: auto;
            }
        }
    }
`
