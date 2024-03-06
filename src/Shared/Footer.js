'use client';
import OfficeLocation from '@/UI/officeLocation';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { renderToString } from 'react-dom/server';
import Gallery from '@/UI/Gallery';
const SITEMAP = [
  {
    title: 'বিস্তারিত',
    links: ['আমাদের সম্পর্কে', 'আমাাদের অফিস', 'সফলতা'],
    herfTag: ['/aboutus', 'https://example.com/careers', { Gallery }],
  },
  {
    title: 'হেল্প সেন্টার',
    links: ['হোয়াটসঅ্যাপ', 'মোবাইল', 'ফেসবুক'],
    herfTag: [
      'https://www.facebook.com/search/top?q=hafezia%20tours%20and%20travels',
      '88001867158067',
      'https://wa.me/88001867158067',
    ],
  },
  {
    title: 'তথ্য',
    links: ['ব্লগ', 'নিউজলেটার', 'চুনতি ব্লাড ব্যাংক'],
    herfTag: [
      'https://example.com/blog',
      'https://example.com/newsletter',
      'https://example.com/chunoti-blood-bank',
    ],
  },
  {
    title: 'আমাদের ঠিকানা',
    className: 'bg-white z-50',
    links: [''],
    herfTag: ['OFFICE'],
    div: <OfficeLocation></OfficeLocation>,
  },
];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full Footer container mx-auto bg-white">
      <div className="mx-auto w-full max-w-7xl px-8 bg-white text-teal-700">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 ">
          {SITEMAP.map(({ title, links, herfTag, div }, key) => (
            <div key={key} className="w-full z-10  px-3">
              <Link href={herfTag[0]}>
                <Typography
                  variant="small"
                  color="#020540"
                  className="mb-4 font-bold uppercase opacity-50"
                >
                  {title}
                </Typography>
              </Link>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <Typography
                    key={index}
                    as="li"
                    color="#020540"
                    className="font-normal"
                  >
                    <a
                      href={herfTag[index]}
                      target="_blank"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
              {div}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col navBar items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between px-14">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal  md:mb-0"
        >
          &copy {currentYear}{' '}
          <a href="https://jmkutub1.web.app/">হাফেজিয়া ট্যুর এন্ড ট্রাভেলস </a>{' '}
          & <a href="https://jmkutub1.web.app/">Kutub Uddin </a>. All Rights
          Reserved.
        </Typography>
        <div className="flex gap-4 sm:justify-center">
          <Typography
            as="a"
            href="https://www.facebook.com/search/top?q=hafezia%20tours%20and%20travels"
            target="blank"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="https://www.instagram.com/"
            target="blank"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="https://wa.me/88001867158067"
            target="_blank"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            {/* <img src="whatsapp-icon.svg" alt="WhatsApp" width="24" height="24" /> */}
            <BsWhatsapp />
          </Typography>
        </div>
      </div>
    </footer>
  );
}
