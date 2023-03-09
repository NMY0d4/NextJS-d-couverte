import React from 'react';

export default function Citation({ data }) {
  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col col-lg-9 col-xl-7'>
          <div className='card' style={{ borderRadius: '15px' }}>
            <div className='card-body p-5'>
              <div className='text-center mb-4 pb-2'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp'
                  alt='Bulb'
                  width='100'
                  height='80'
                />
              </div>

              <figure className='text-center mb-0'>
                <blockquote className='blockquote'>
                  <p className='pb-3'>
                    <i className='fas fa-quote-left fa-xs text-primary'></i>
                    <span className='lead font-italic'>{data.content}</span>
                    <i className='fas fa-quote-right fa-xs text-primary'></i>
                  </p>
                </blockquote>
                <figcaption className='blockquote-footer mb-0'>
                  {data.author}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const quote = await fetch('https://api.quotable.io/random');
    const data = await quote.json();
    return {
      props: { data },
      revalidate: 20,
    };
  } catch (error) {
    console.log(error);
  }
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1
