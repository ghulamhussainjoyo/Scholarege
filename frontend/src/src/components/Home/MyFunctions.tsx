import React, { Fragment } from 'react'
import SmallCard from '../SmallCard'
export const GetMostResecentArticle = () => {

    let width = window.innerWidth

    if (width >= 2560)
        return (
            <Fragment>
                {
                    [1, 2, 3, 4, 5, 6].map((index, value) => <SmallCard key={"small-card-" + index} />)
                }
            </Fragment>
        )
    else if (width >= 1920)
        return <Fragment>
            {
                [1, 2, 3, 4].map((index, value) => <SmallCard key={"small-card-" + index} />)
            }
        </Fragment>
    else if (width >= 1280)
        return <Fragment>
            {
                [1, 2, 3, 4].map((index, value) => <SmallCard key={"small-card-" + index} />)
            }
        </Fragment>
    else if (width >= 1024)
        return <Fragment>
            {
                [1, 2, 3].map((index, value) => <SmallCard key={"small-card-" + index} />)
            }
        </Fragment>

    else if (width >= 768)
        return <Fragment>
            {
                [1, 2].map((index, value) => <SmallCard key={"small-card-" + index} />)
            }
        </Fragment>
    else
        return <Fragment>
            {
                [1, 2, 3].map((index, value) => <SmallCard key={"small-card-" + index} />)
            }
        </Fragment>
}