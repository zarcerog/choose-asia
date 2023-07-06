import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel = require('react-responsive-carousel').Carousel;

function Slider() {
    const slides = [
        {
            url: 'https://media.graphassets.com/h5oIHEeTSSe5l3u3UXMA'
        },
        {
            url: 'https://media.graphassets.com/Myq4nuRvQbODSYZDFuIy'
        },
        {
            url: 'https://media.graphassets.com/d3uE6oEXQ0qZyE8NDQVA'
        },
        {
            url: 'https://media.graphassets.com/iFigGS0FSDGzpA0xCD4f'
        },
        {
            url: 'https://media.graphassets.com/gyXDn4SASE2srcV5O9YQ'
        },
        {
            url: 'https://media.graphassets.com/JGEmyuzwQPqmJ5udVIPb'
        },
        {
            url: 'https://media.graphassets.com/LU6DuADmRh2orOSV6ouC'
        },
        {
            url: 'https://media.graphassets.com/PgIR141RSFemxwtfzhjg'
        },
        {
            url: 'https://media.graphassets.com/WEZdpPTpRFD9nOLUK1cZ'
        },
        {
            url: 'https://media.graphassets.com/nufWUExuRmewo0BfnfXC'
        },
        {
            url: 'https://media.graphassets.com/CtBvIlwURXWTW7c2BY2Y'
        },
        {
            url: 'https://media.graphassets.com/6RvIuCpSPyL6cDD78g0g'
        },
        {
            url: 'https://media.graphassets.com/WKbHnshJTs62iLP0NdIx'
        },
        {
            url: 'https://media.graphassets.com/lqxAaOdTad8LIevzPqdg'
        },
        {
            url: 'https://media.graphassets.com/ZE0yzi4RgSZQhh0UWPCw'
        },
        {
            url: 'https://media.graphassets.com/17vjvJ7vSx6UYrk4pKz1'
        }
    ];

    return (
        <Carousel showIndicators={false} className='h-96 w-96'>
            <div>
                <img src={slides[0].url} />
            </div>
            <div>
                <img src={slides[1].url} />
            </div>
            <div>
                <img src={slides[2].url} />
            </div>
            <div>
                <img src={slides[3].url} />
            </div>
            <div>
                <img src={slides[4].url} />
            </div>
            <div>
                <img src={slides[5].url} />
            </div>
            <div>
                <img src={slides[6].url} />
            </div>
            <div>
                <img src={slides[7].url} />
            </div>
            <div>
                <img src={slides[8].url} />
            </div>
            <div>
                <img src={slides[9].url} />
            </div>
            <div>
                <img src={slides[10].url} />
            </div>
            <div>
                <img src={slides[11].url} />
            </div>
            <div>
                <img src={slides[12].url} />
            </div>
            <div>
                <img src={slides[13].url} />
            </div>
            <div>
                <img src={slides[14].url} />
            </div>
            <div>
                <img src={slides[15].url} />
            </div>

        </Carousel>
    )
}

export default Slider;