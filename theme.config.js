export default {
    github: 'https://github.com/realtimedatalake/rtdl', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/realtimedatalake/rtdl-docs/blob/main', // base URL for the docs repository
    titleSuffix: ' – rtdl⚡️',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © rtdl.`,
    footerEditLink: `Edit this page on GitHub`,
    logo: (
      <>
        {/* <svg>...</svg> */}
        <span className="mr-2 font-extrabold hidden md:inline">rtdl ⚡️</span>
        <span className="font-normal hidden md:inline">
          The Real-Time Data Lake
        </span>
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="rtdl documentation" />
        <meta name="og.description" content="rtdl documentation" />
        <meta name="og:title" content="rtdl documentation" />
        <meta name="apple-mobile-web-app-title" content="rtdl" />
      </>
    ),
}
