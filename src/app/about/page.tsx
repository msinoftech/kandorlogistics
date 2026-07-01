import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import WhoWeAre from "@/components/WhoWeAre";

const { phone } = contactInfo;

export const metadata: Metadata = {
  title: "Kandor Logistics | Trusted Trucking Dispatch Partner in the USA",
  description: "Kandor Logistics, How we have grown from port drayage in Texas to a nationwide dispatch partner — helping owner-operators and fleets run more profitably.",
  keywords: [ "logistics", "freight forwarding", "supply chain", "shipping", "customs brokerage", "cargo", "global transport", "Kandor" ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "Kandor Logistics | Trusted Trucking Dispatch Partner in the USA",
    description: "Kandor Logistics, How we have grown from port drayage in Texas to a nationwide dispatch partner — helping owner-operators and fleets run more profitably.",
    images: [
      {
        url: `${BASE_URL}/who-we-are.webp`,
        width: 500,
        height: 500,
        alt: "Kandor Logistics | Trusted Trucking Dispatch Partner in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KandorLogistics",
    creator: "@KandorLogistics",
    title: "Kandor Logistics | Trusted Trucking Dispatch Partner in the USA",
    description: "Kandor Logistics, How we have grown from port drayage in Texas to a nationwide dispatch partner — helping owner-operators and fleets run more profitably.",
    images: `${BASE_URL}/who-we-are.webp`,
  },
};

export default function about() {

  const aboutSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
        "description": "Kandor Logistics, a dedicated team of truck dispatchers, provides 24/7 back-office support for owner-operators and fleets. Get a free quote today!",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        }
      },
      {
        "@type": "WebPage",
        "url": `${BASE_URL}/about`,
        "name": "About | Kandor Logistics",
        "inLanguage": "en-US",
        "description": "Kandor Logistics, How we have grown from port drayage in Texas to a nationwide dispatch partner — helping owner-operators and fleets run more profitably.",
        "isPartOf": {
          "@type": "WebSite",
          "url": `${BASE_URL}`,
          "name": `${APP_NAME}`,
        },
      },
      {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "primaryImageOfPage": `${BASE_URL}/who-we-are.webp`,
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": `${APP_NAME}`,
        },
        "description": "Kandor Logistics, How we have grown from port drayage in Texas to a nationwide dispatch partner — helping owner-operators and fleets run more profitably.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `${phone}`,
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["en", "es"],
        },
        "sameAs": [
          "https://www.facebook.com/kandorlogistics",
          "https://x.com/kandorlogistics",
          "https://www.instagram.com/kandorlogistics",
          "https://www.youtube.com/@KandorLogistics"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Houston, Texas",
          "addressRegion": "TX",
          "addressCountry": "US",
        },
      },
      {
        "@type": "AboutPage",
        "name": "About | Kandor Logistics",
        "url": `${BASE_URL}/about`,
        "primaryImageOfPage": `${BASE_URL}/who-we-are.webp`,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}`,
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": `${BASE_URL}/about`,
            },
          ],
        },
      },
    ],
  };

  const counters = [
    {
      icon: `<svg height="60px" width="60px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 503.326 503.326" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#797979;" d="M451.254,425.219c0-23.96-19.43-43.39-43.39-43.39c-23.96,0-43.39,19.43-43.39,43.39 c0,23.96,19.43,43.39,43.39,43.39C431.824,468.609,451.254,449.179,451.254,425.219"></path> <path style="fill:#ffc03e;" d="M321.085,173.558H155.622c-1.458,2.76-2.968,5.632-4.521,8.678 C125.388,232.395,86.78,295.05,86.78,295.05v17.356h156.229c47.911,0,86.754-38.843,86.754-86.754v-43.416 C329.763,177.446,325.875,173.558,321.085,173.558"></path> <path style="fill:#e7000b;" d="M497.867,336.257l-37.931-15.178l-22.754-90.988c-1.927-7.723-8.869-13.147-16.835-13.147h-90.581 v8.704c0,47.92-38.843,86.754-86.762,86.754H86.783v104.136c0,4.799,3.879,8.678,8.678,8.678h43.39 c0-23.96,19.421-43.39,43.39-43.39c23.96,0,43.39,19.43,43.39,43.39h104.136h34.712c0-23.96,19.421-43.39,43.39-43.39 c23.96,0,43.39,19.43,43.39,43.39h43.39c4.79,0,8.678-3.879,8.678-8.678V344.31C503.326,340.769,501.165,337.576,497.867,336.257"></path> <path style="fill:#797979;" d="M225.627,425.219c0-23.96-19.43-43.39-43.39-43.39s-43.39,19.43-43.39,43.39 c0,23.96,19.43,43.39,43.39,43.39S225.627,449.179,225.627,425.219"></path> <g> <path style="fill:#C0C0C0;" d="M182.237,442.575c-9.58,0-17.356-7.775-17.356-17.356c0-9.58,7.775-17.356,17.356-17.356 s17.356,7.775,17.356,17.356C199.593,434.799,191.818,442.575,182.237,442.575"></path> <path style="fill:#C0C0C0;" d="M407.864,442.575c-9.58,0-17.356-7.775-17.356-17.356c0-9.58,7.775-17.356,17.356-17.356 s17.356,7.775,17.356,17.356C425.22,434.799,417.445,442.575,407.864,442.575"></path> </g> <path style="fill:#6d251b;" d="M381.831,364.471h-17.356c-4.799,0-8.678-3.888-8.678-8.678c0-4.79,3.879-8.678,8.678-8.678h17.356 c4.799,0,8.678,3.888,8.678,8.678C390.508,360.583,386.629,364.471,381.831,364.471"></path> <g> <path style="fill:#c28825;" d="M269.017,225.623H132.478c-4.799,0-8.678-3.888-8.678-8.678s3.879-8.678,8.678-8.678h136.539 c4.799,0,8.678,3.888,8.678,8.678S273.816,225.623,269.017,225.623"></path> <path style="fill:#c28825;" d="M251.661,277.691H130.169c-4.799,0-8.678-3.888-8.678-8.678s3.879-8.678,8.678-8.678h121.492 c4.799,0,8.678,3.888,8.678,8.678S256.46,277.691,251.661,277.691"></path> </g> <path style="fill:#4FBA6F;" d="M86.78,34.717C36.543,34.717,0,74.028,0,117.149c0,25.852,9.624,40.04,22.459,65.085 C48.171,232.392,86.78,295.047,86.78,295.047s38.608-62.655,64.321-112.814c12.835-25.045,22.459-39.233,22.459-65.085 C173.559,74.028,137.016,34.717,86.78,34.717"></path> <path style="fill:#FFFFFF;" d="M130.169,121.49c0-23.96-19.43-43.39-43.39-43.39s-43.39,19.43-43.39,43.39s19.43,43.39,43.39,43.39 S130.169,145.45,130.169,121.49"></path> <path style="fill:#6d251b;" d="M373.153,301.386v-41.047c0-4.799-3.879-8.678-8.678-8.678s-8.678,3.879-8.678,8.678v41.047 c0,15.646,12.731,28.377,28.377,28.377h97.445l-21.686-8.678l-2.169-8.678h-73.589C378.09,312.407,373.153,307.461,373.153,301.386 "></path> </g> </g></svg>`,
      counter_value: "150+",
      caption: "Deliveries",
    },
    {
      icon: `<svg height="60px" width="60px" version="1.1 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#E6AF78;" d="M304.892,216.838v-29.421H207.11v29.421c0,5.042-3.468,9.421-8.376,10.575l-67.221,15.817 c-9.816,2.311-16.754,11.069-16.754,21.153v44.583c0,9.751,7.904,17.655,17.655,17.655h247.172c9.751,0,17.655-7.904,17.655-17.655 v-44.583c0-10.083-6.937-18.842-16.753-21.152l-67.221-15.817C308.36,226.259,304.892,221.88,304.892,216.838z"></path> <path style="fill:#FFD782;" d="M380.489,243.23l-56.302-13.247c-8.012,30.206-35.459,52.5-68.186,52.5s-60.174-22.294-68.185-52.5 l-56.302,13.247c-9.816,2.311-16.754,11.069-16.754,21.152v44.584c0,9.75,7.905,17.655,17.655,17.655h247.172 c9.75,0,17.655-7.905,17.655-17.655v-44.584C397.242,254.298,390.304,245.54,380.489,243.23z"></path> <path style="fill:#D29B6E;" d="M207.109,216.838c0,3.647-1.831,6.927-4.692,8.911c64.448,32.288,102.475-31.559,102.475-31.559 v-6.774H207.11v29.421H207.109z"></path> <path style="fill:#F0C087;" d="M185.38,59.756l4.734,104.146c0.442,9.729,5.213,18.752,13.004,24.595l22.462,16.846 c5.642,4.232,12.504,6.519,19.556,6.519h21.729c7.052,0,13.914-2.287,19.556-6.519l22.462-16.846 c7.791-5.844,12.562-14.866,13.004-24.595l4.734-104.146H185.38z"></path> <path style="fill:#E6AF78;" d="M185.38,59.756l4.734,104.146c0.442,9.73,5.213,18.752,13.004,24.596l22.462,16.846 c5.642,4.232,12.504,6.519,19.556,6.519H256c-16.297-5.432-27.161-48.892-27.161-48.892l0.594-53.02 c0.049-4.372,3.293-8.014,7.619-8.646c28.672-4.181,65.273-12.436,89.57-36.479v-5.071L185.38,59.756L185.38,59.756z"></path> <path style="fill:#5A4146;" d="M174.515,54.324v5.432l5.432,59.756h10.865l10.865-32.594c0,0,70.621,0,108.648-21.729l10.865,54.324 h10.865l5.432-59.756v-5.432C337.485,24.321,313.164,0,283.162,0h-54.324C198.836,0,174.515,24.321,174.515,54.324z"></path> <path style="fill:#F0C087;" d="M337.144,128.052l-6.135,24.54c-0.727,2.908-3.339,4.947-6.336,4.947l0,0 c-3.294,0-6.072-2.453-6.481-5.721l-3.137-25.098c-0.839-6.711,4.394-12.64,11.158-12.64h0.021 C333.551,114.08,338.919,120.954,337.144,128.052z"></path> <path style="fill:#E6AF78;" d="M174.856,128.052l6.135,24.54c0.727,2.908,3.339,4.947,6.336,4.947l0,0 c3.294,0,6.072-2.453,6.481-5.721l3.137-25.098c0.839-6.711-4.394-12.64-11.158-12.64h-0.021 C178.45,114.08,173.082,120.954,174.856,128.052z"></path> <g> <path style="fill:#FFC36E;" d="M154.64,282.537l-35.201-31.622c-2.95,3.735-4.68,8.435-4.68,13.466v44.584 c0,9.751,7.904,17.655,17.655,17.655h31.236v-23.878C163.65,295.034,160.374,287.689,154.64,282.537z"></path> <path style="fill:#FFC36E;" d="M357.361,282.537l35.201-31.622c2.95,3.735,4.68,8.435,4.68,13.466v44.584 c0,9.751-7.904,17.655-17.655,17.655H348.35v-23.878C348.35,295.034,351.626,287.689,357.361,282.537z"></path> <path style="fill:#FFC36E;" d="M324.186,229.983c-8.011,30.206-35.458,52.5-68.185,52.5s-60.174-22.294-68.185-52.5l-17.15,4.035 l0.086,0.49c10.249,38.643,45.305,65.63,85.249,65.63s75-26.987,85.25-65.63l0.047-0.5L324.186,229.983z"></path> </g> <path style="fill:#FFCD78;" d="M79.448,490.217l-39.452,20.74c-6.531,3.434-14.164-2.112-12.917-9.385l7.534-43.929L2.698,426.532 c-5.283-5.15-2.368-14.123,4.934-15.185l44.108-6.409l19.725-39.969c3.265-6.616,12.701-6.616,15.966,0l19.725,39.969l44.108,6.409 c7.302,1.062,10.217,10.034,4.934,15.185l-31.917,31.112l7.534,43.929c1.247,7.272-6.386,12.818-12.917,9.385L79.448,490.217z"></path> <path style="fill:#FFD782;" d="M151.265,411.348l-44.108-6.409L87.431,364.97c-3.265-6.616-12.7-6.616-15.966,0L58.8,390.633 l70.056,119.095c2.195-1.91,3.531-4.825,2.961-8.156l-7.534-43.929l31.917-31.112C161.482,421.382,158.567,412.409,151.265,411.348z "></path> <path style="fill:#FFFFFF;" d="M108.917,417.152c-6.982-1.592-12.478-7.087-14.069-14.069c-0.12-0.525-0.815-0.525-0.936,0 c-1.591,6.982-7.087,12.478-14.069,14.069c-0.525,0.12-0.525,0.815,0,0.936c6.982,1.591,12.478,7.087,14.069,14.069 c0.12,0.525,0.815,0.525,0.936,0c1.591-6.982,7.087-12.478,14.069-14.069C109.442,417.969,109.442,417.272,108.917,417.152z"></path> <path style="fill:#FFCD78;" d="M256,490.217l-39.452,20.74c-6.531,3.434-14.164-2.112-12.917-9.385l7.534-43.929l-31.917-31.112 c-5.283-5.15-2.368-14.123,4.934-15.185l44.108-6.409l19.725-39.969c3.265-6.616,12.701-6.616,15.966,0l19.725,39.969l44.108,6.409 c7.302,1.062,10.217,10.034,4.934,15.185l-31.917,31.112l7.534,43.929c1.247,7.272-6.386,12.818-12.917,9.385L256,490.217z"></path> <path style="fill:#FFD782;" d="M327.817,411.348l-44.108-6.409l-19.726-39.969c-3.265-6.616-12.7-6.616-15.966,0l-12.665,25.663 l70.056,119.095c2.195-1.91,3.531-4.825,2.961-8.156l-7.534-43.929l31.917-31.112C338.034,421.382,335.119,412.409,327.817,411.348z "></path> <path style="fill:#FFFFFF;" d="M285.469,417.152c-6.982-1.592-12.478-7.087-14.069-14.069c-0.12-0.525-0.815-0.525-0.936,0 c-1.591,6.982-7.087,12.478-14.069,14.069c-0.525,0.12-0.525,0.815,0,0.936c6.982,1.591,12.478,7.087,14.069,14.069 c0.12,0.525,0.815,0.525,0.936,0c1.591-6.982,7.087-12.478,14.069-14.069C285.994,417.969,285.994,417.272,285.469,417.152z"></path> <path style="fill:#FFCD78;" d="M432.552,490.217l-39.452,20.74c-6.531,3.434-14.164-2.112-12.917-9.385l7.534-43.929l-31.917-31.112 c-5.283-5.15-2.368-14.123,4.934-15.185l44.108-6.409l19.725-39.969c3.265-6.616,12.701-6.616,15.966,0l19.725,39.969l44.108,6.409 c7.302,1.062,10.217,10.034,4.934,15.185l-31.917,31.112l7.534,43.929c1.247,7.272-6.386,12.818-12.917,9.385L432.552,490.217z"></path> <path style="fill:#FFD782;" d="M504.369,411.348l-44.108-6.409l-19.726-39.969c-3.265-6.616-12.7-6.616-15.966,0l-12.665,25.663 l70.056,119.095c2.195-1.91,3.531-4.825,2.961-8.156l-7.534-43.929l31.917-31.112C514.586,421.382,511.67,412.409,504.369,411.348z"></path> <path style="fill:#FFFFFF;" d="M462.021,417.152c-6.982-1.592-12.478-7.087-14.069-14.069c-0.12-0.525-0.815-0.525-0.936,0 c-1.591,6.982-7.087,12.478-14.069,14.069c-0.525,0.12-0.525,0.815,0,0.936c6.982,1.591,12.478,7.087,14.069,14.069 c0.12,0.525,0.815,0.525,0.936,0c1.591-6.982,7.087-12.478,14.069-14.069C462.546,417.969,462.546,417.272,462.021,417.152z"></path> </g></svg>`,
      counter_value: "75+",
      caption: "Clients",
    },
    {
      icon: `<svg width="60px" height="60px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M640 213.333333L384 128 128 213.333333v682.666667l256-85.333333 256 85.333333 256-85.333333V128z" fill="#FFECB3"></path><path d="M384 128v682.666667l256 85.333333V213.333333z" fill="#FFE082"></path><path d="M640 320c-82.496 0-149.333333 70.250667-149.333333 156.821333S640 768 640 768s149.333333-204.629333 149.333333-291.178667S722.496 320 640 320z" fill="#F44336"></path><path d="M640 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#FFEBEE"></path></g></svg>`,
      counter_value: "30+",
      caption: "Cities Covered",
    },
    {
      icon: `<svg width="60px" height="60px" viewBox="0 0 120 120" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#E24255;} .st1{fill:#FFC54D;} .st2{fill:#E8B04B;} .st3{fill:#FFFFFF;} </style> <g> <polygon class="st0" points="79.7,45.6 60,55.5 40.3,45.6 15.9,94.3 31.1,92.8 38.9,105.9 60,63.9 81.1,105.9 88.9,92.8 104.1,94.3 "></polygon> <circle class="st1" cx="60" cy="46.4" r="32.2"></circle> <circle class="st2" cx="60" cy="46.4" r="25.3"></circle> <path class="st3" d="M61.2,31.2l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2 l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,62.6c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2 l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,30.2,60.7,30.2,61.2,31.2z"></path> </g> </g></svg>`,
      counter_value: "25+",
      caption: "Awards",
    },
  ];

  const workProcess = [
    {
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,
      title: "Request A Quote",
      content: "Contact us by calling or emailing directly for a personalized dispatching service tailored to your needs.",
    },
    {
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>`,
      title: "We Reach Out",
      content: "Our team will call back from the office to discuss load preferences, routes, and essential required documents.",
    },
    {
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>`,
      title: "Booking & Coordination",
      content: "Our office team finds the best-paying loads matching your criteria and confirms with you, while handling all communication with partners.",
    },
    {
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/></svg>`,
      title: "Deliver Shipping",
      content: "We stay in touch and help to track your payment to ensure smooth delivery.",
    },
  ];

  return (
    <>
      {/* Schema added to the <head> */}
      <Script id="about-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemaData) }}/>

      <div className="max-w-7xl mx-auto sm:pt-40 md:pt-40 lg:pt-40 pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">Meet Kandor Logistics: Your Trusted Dispatch Partner in the USA</h1>
          <p>At Kandor Logistics, we are proud to be the trusted backbone for owner-operators and fleet companies across the USA. Our goal is to simplify trucking operations so your business operates efficiently and profitably.</p>
        </div>
      </div>

      <section className="bg-white relative py-12">
        <AboutSection
          image="/about-us1.1.webp"
          title="About Kandor Logistics"
          content={`Founded at the Port of Texas and built over a decade of hands-on dispatch experience, Kandor Logistics is a full-service trucking dispatch partner for owner-operators and fleets nationwide. We handle load sourcing, rate negotiation, paperwork, and back-office management — around the clock — so you can stay focused on the road. Whether you run a single unit or manage a growing fleet, our experienced dispatchers are ready to maximise your miles, protect your rates, and support your business every step of the way.`}
          listTitle=""
          listItems={[]}
          showLink={false}
          contentStyle={{ backgroundColor: "#1e2939", color: "#fff", padding: "30px" }}
          titleClassName="text-3xl text-white md:text-4xl font-bold mb-4"
        />
      </section>

      <CounterSection
        counters={counters}
      />

      <section className="element-row section-process py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <div className="text-2xl text-gray-900 md:text-4xl font-bold text-center">Our Work Process</div>
          </div>
          {workProcess.length > 0 && (
            <div className="mt-12 flow-root">
              <ol className="space-y-10">
                {workProcess.map((item, index) => {
                  const isLast = index === workProcess.length - 1;
                  return (
                    <li key={index} className="relative">
                      <div className="relative flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <span className="h-20 w-20 z-2 relative flex items-center justify-center rounded-full border border-red-300 bg-red-50">
                            {item.icon && (
                              <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                            )}
                          </span>
                        </div>
                        <div className="flex-1">
                          {item.title && (
                            <div className="font-semibold text-gray-900">{item.title}</div>
                          )}
                          {item.content && (
                            <p>{item.content}</p>
                          )}
                        </div>
                      </div>

                      {!isLast && (
                        <span className="absolute z-1 left-10 top-10 -ml-px h-full w-0.5 bg-red-300" aria-hidden="true"></span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </section>

      <WhoWeAre />
    </>
  );
}