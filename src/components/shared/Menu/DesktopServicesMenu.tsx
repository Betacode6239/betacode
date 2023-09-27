import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import React from 'react'

const contents = [
  {
    title: 'Website Development',
    desc: 'Let us bring your brand to life with visually stunning and user-friendly websites that leave a lasting impression.',
    href: '/services/web-development',
    iconSvg:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.593 66.676">
        <g id="website-program-svgrepo-com_1_" data-name="website-program-svgrepo-com (1)" transform="translate(-0.158 -48.268)">
          <path id="Path_7" data-name="Path 7" d="M73.177,672.976H.733a.575.575,0,1,1,0-1.15H73.176a.575.575,0,1,1,0,1.15Zm-36.222,5.747a2.3,2.3,0,1,1,2.3-2.3A2.3,2.3,0,0,1,36.955,678.723Zm0-3.45a1.15,1.15,0,1,0,1.15,1.15,1.151,1.151,0,0,0-1.15-1.15Zm-9.767,18.4a.576.576,0,0,1-.561-.7l2.3-10.349a.575.575,0,0,1,1.123.249l-2.3,10.349A.575.575,0,0,1,27.187,693.674Zm19.535,0a.575.575,0,0,1-.561-.45l-2.3-10.349a.575.575,0,1,1,1.123-.249l2.3,10.349a.576.576,0,0,1-.562.7Z" transform="translate(0 -578.73)" /**fill="#e55650"*/ />
          <path id="Path_8" data-name="Path 8" d="M92.988,159.478h-23a.575.575,0,1,1,0-1.15h23a.575.575,0,1,1,0,1.15Zm21.273-24.13H48.717a.575.575,0,0,1-.575-.575V96.827a.575.575,0,0,1,.575-.575h65.544a.575.575,0,0,1,.575.575v37.947a.575.575,0,0,1-.575.575ZM49.292,134.2h64.394V97.4H49.292Z" transform="translate(-44.534 -44.534)" /**fill="#e55650"*/ />
          <path id="Path_9" data-name="Path 9" d="M69.727,102.313H4.183A4.029,4.029,0,0,1,.158,98.289v-46a4.029,4.029,0,0,1,4.025-4.025H69.727a4.029,4.029,0,0,1,4.025,4.025v46A4.03,4.03,0,0,1,69.727,102.313ZM4.183,49.418a2.878,2.878,0,0,0-2.875,2.875v46a2.877,2.877,0,0,0,2.875,2.875H69.727A2.877,2.877,0,0,0,72.6,98.288v-46a2.878,2.878,0,0,0-2.875-2.875Z" transform="translate(0 0)" /**fill="#e55650"*/ />
          <path id="Path_10" data-name="Path 10" d="M69.727,149.129H4.183A3.981,3.981,0,0,1,.158,145.1v-2.3a.575.575,0,1,1,1.15,0v2.3a2.843,2.843,0,0,0,2.875,2.875H69.727A2.843,2.843,0,0,0,72.6,145.1v-2.282a.575.575,0,1,1,1.15,0V145.1a3.982,3.982,0,0,1-4.025,4.025ZM6.482,135.348a.575.575,0,0,1-.575-.575V96.827a.575.575,0,1,1,1.15,0v37.947a.575.575,0,0,1-.575.575Z" transform="translate(0 -44.534)" /**fill="#e55650"*/ />
          <path id="Path_11" data-name="Path 11" d="M49.867,145.386h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,1,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,1,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,1,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm0,3.45h-1.15a.575.575,0,0,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm9.2-31.047h-4.6a.575.575,0,0,1,0-1.15h4.6a.575.575,0,0,1,0,1.15Zm18.4,3.45h-13.8a.575.575,0,0,1,0-1.15h13.8a.575.575,0,1,1,0,1.15Zm-16.1,0h-5.75a.575.575,0,0,1,0-1.15h5.75a.575.575,0,1,1,0,1.15Zm16.1,3.45h-1.15a.575.575,0,1,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm-3.45,0H56.766a.575.575,0,0,1,0-1.15H74.015a.575.575,0,0,1,0,1.15Zm-13.8,6.9h-3.45a.575.575,0,0,1,0-1.15h3.45a.575.575,0,1,1,0,1.15Zm17.248,0H62.516a.575.575,0,0,1,0-1.15H77.464a.575.575,0,1,1,0,1.15Zm0-3.45H57.916a.575.575,0,0,1,0-1.15H77.464a.575.575,0,1,1,0,1.15Zm0,6.9h-4.6a.575.575,0,1,1,0-1.15h4.6a.575.575,0,0,1,0,1.15Zm-3.45,3.45h-18.4a.575.575,0,1,1,0-1.15h18.4a.575.575,0,1,1,0,1.15Zm-9.2,6.9h-9.2a.575.575,0,1,1,0-1.15h9.2a.575.575,0,1,1,0,1.15Zm12.649-3.45H71.715a.575.575,0,0,1,0-1.15h5.749a.575.575,0,0,1,0,1.15Zm-8.049,0H56.766a.575.575,0,1,1,0-1.15H69.415a.575.575,0,1,1,0,1.15Zm-10.349,6.9h-4.6a.575.575,0,0,1,0-1.15h4.6a.575.575,0,0,1,0,1.15Zm18.4-10.349h-1.15a.575.575,0,1,1,0-1.15h1.15a.575.575,0,1,1,0,1.15Zm-6.9-3.45h-13.8a.575.575,0,1,1,0-1.15h13.8a.575.575,0,1,1,0,1.15Z" transform="translate(-44.534 -89.069)" /**fill="#e55650"*/ />
          <path id="Path_12" data-name="Path 12" d="M504.577,135.348a.575.575,0,0,1-.575-.575V96.827a.575.575,0,1,1,1.15,0v37.947a.575.575,0,0,1-.575.575Z" transform="translate(-467.622 -44.534)" /**fill="#e55650"*/ />
          <path id="Path_13" data-name="Path 13" d="M703.471,381.034a.574.574,0,0,1-.482-.262L696,370.015,689,380.773a.575.575,0,1,1-.963-.627l7.474-11.5a.6.6,0,0,1,.964,0l7.474,11.5a.574.574,0,0,1-.482.888Z" transform="translate(-638.344 -297.119)" /**fill="#e55650"*/ />
          <path id="Path_14" data-name="Path 14" d="M594.851,365.973a.575.575,0,0,1-.478-.894l4.6-6.893a.575.575,0,0,1,.957,0l2.266,3.4a.575.575,0,1,1-.957.638l-1.788-2.68-4.121,6.176A.574.574,0,0,1,594.851,365.973Zm0-8.049a2.875,2.875,0,1,1,2.875-2.875A2.878,2.878,0,0,1,594.851,357.923Zm0-4.6a1.725,1.725,0,1,0,1.725,1.725A1.727,1.727,0,0,0,594.851,353.324Z" transform="translate(-549.272 -282.058)" /**fill="#e55650"*/ />
          <path id="Path_15" data-name="Path 15" d="M585.857,336.283h-25.3a.575.575,0,0,1-.575-.575V320.759a.575.575,0,0,1,.575-.575h25.3a.575.575,0,0,1,.575.575v14.949a.574.574,0,0,1-.575.575Zm-24.723-1.15h24.148v-13.8H561.134Z" transform="translate(-519.58 -252.368)" /**fill="#e55650"*/ />
          <path id="Path_16" data-name="Path 16" d="M585.857,145.386h-25.3a.575.575,0,1,1,0-1.15h25.3a.575.575,0,0,1,0,1.15Z" transform="translate(-519.58 -89.069)" /**fill="#e55650"*/ />
          <path id="Path_17" data-name="Path 17" d="M912.455,154.587a.574.574,0,0,1-.575-.575v-9.2a.575.575,0,1,1,1.15,0v9.2a.575.575,0,0,1-.575.575Z" transform="translate(-846.178 -89.071)" /**fill="#e55650"*/ />
          <path id="Path_18" data-name="Path 18" d="M585.857,273.348h-25.3a.575.575,0,1,1,0-1.15h25.3a.575.575,0,0,1,0,1.15Z" transform="translate(-519.58 -207.832)" /**fill="#e55650"*/ />
          <path id="Path_19" data-name="Path 19" d="M582.407,209.366H560.559a.575.575,0,1,1,0-1.15h21.848a.575.575,0,0,1,0,1.15Z" transform="translate(-519.58 -148.449)" /**fill="#e55650"*/ />
          <path id="Path_20" data-name="Path 20" d="M585.857,577.256h-25.3a.575.575,0,1,1,0-1.15h25.3a.575.575,0,0,1,0,1.15Z" transform="translate(-519.58 -489.891)" /**fill="#e55650"*/ />
        </g>
      </svg>
  },
  {
    title: 'API Development',
    desc: 'Let us bring your brand to life with visually stunning and user-friendly websites that leave a lasting impression.',
    href: '/services',
    iconSvg:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.768 58.38">
        <g id="ux-design-svgrepo-com" transform="translate(0 -56)">
          <path id="Path_22" data-name="Path 22" d="M33.1,90.195a1.1,1.1,0,1,0-.775-.322A1.1,1.1,0,0,0,33.1,90.195Z" transform="translate(-27.318 -27.318)" /**fill="#fff"*/ />
          <path id="Path_23" data-name="Path 23" d="M57.1,90.195a1.1,1.1,0,1,0-.775-.322A1.1,1.1,0,0,0,57.1,90.195Z" transform="translate(-47.806 -27.318)" /**fill="#fff"*/ />
          <path id="Path_24" data-name="Path 24" d="M81.1,90.195a1.1,1.1,0,1,0-.775-.322A1.1,1.1,0,0,0,81.1,90.195Z" transform="translate(-68.295 -27.318)" /**fill="#fff"*/ />
          <path id="Path_25" data-name="Path 25" d="M113.1,90.195h44.48a1.1,1.1,0,0,0,0-2.195H113.1a1.1,1.1,0,1,0,0,2.195Z" transform="translate(-95.613 -27.318)" /**fill="#fff"*/ />
          <path id="Path_26" data-name="Path 26" d="M449.1,90.195h2.341a1.1,1.1,0,1,0,0-2.195H449.1a1.1,1.1,0,1,0,0,2.195Z" transform="translate(-382.45 -27.318)" /**fill="#fff"*/ />
          <path id="Path_27" data-name="Path 27" d="M105.283,168H84.213a3.442,3.442,0,0,0-3.438,3.438v.073H79.531a3.442,3.442,0,0,0-3.438,3.438v9.437H73.605V180.8a3.442,3.442,0,0,0-3.438-3.438H51.438A3.442,3.442,0,0,0,48,180.8v9.364a3.442,3.442,0,0,0,3.438,3.438H70.167a3.442,3.442,0,0,0,3.438-3.438v-3.585h2.487v9.437a3.442,3.442,0,0,0,3.438,3.438h1.244v.073a3.442,3.442,0,0,0,3.438,3.438h21.07a3.442,3.442,0,0,0,3.438-3.438V197.19a3.442,3.442,0,0,0-3.438-3.438H84.213a3.442,3.442,0,0,0-3.438,3.438v.073H79.531a1.245,1.245,0,0,1-1.244-1.244v-9.437h2.487v.073a3.442,3.442,0,0,0,3.438,3.438h21.07a3.442,3.442,0,0,0,3.438-3.438v-2.341a3.442,3.442,0,0,0-3.438-3.438H84.213a3.442,3.442,0,0,0-3.438,3.438v.073H78.287V174.95a1.245,1.245,0,0,1,1.244-1.244h1.244v.073a3.442,3.442,0,0,0,3.438,3.438h21.07a3.442,3.442,0,0,0,3.438-3.438v-2.341A3.442,3.442,0,0,0,105.283,168ZM71.411,190.167a1.245,1.245,0,0,1-1.244,1.244H51.438a1.245,1.245,0,0,1-1.244-1.244V180.8a1.245,1.245,0,0,1,1.244-1.244H70.167a1.245,1.245,0,0,1,1.244,1.244ZM82.97,197.19a1.245,1.245,0,0,1,1.244-1.244h21.07a1.245,1.245,0,0,1,1.244,1.244v2.341a1.245,1.245,0,0,1-1.244,1.244H84.213a1.245,1.245,0,0,1-1.244-1.244Zm0-12.876a1.245,1.245,0,0,1,1.244-1.244h21.07a1.245,1.245,0,0,1,1.244,1.244v2.341a1.245,1.245,0,0,1-1.244,1.244H84.213a1.245,1.245,0,0,1-1.244-1.244Zm23.557-10.535a1.245,1.245,0,0,1-1.244,1.244H84.213a1.245,1.245,0,0,1-1.244-1.244v-2.341a1.245,1.245,0,0,1,1.244-1.244h21.07a1.245,1.245,0,0,1,1.244,1.244Z" transform="translate(-40.977 -95.613)" /**fill="#fff"*/ />
          <path id="Path_28" data-name="Path 28" d="M68.988,56H5.779A5.786,5.786,0,0,0,0,61.779V108.6a5.786,5.786,0,0,0,5.779,5.78H68.988a5.786,5.786,0,0,0,5.78-5.78V61.779A5.786,5.786,0,0,0,68.988,56ZM5.779,58.195H68.988a3.589,3.589,0,0,1,3.585,3.585v3.585H2.195V61.779A3.589,3.589,0,0,1,5.779,58.195Zm63.209,53.991H5.779A3.589,3.589,0,0,1,2.195,108.6V67.559H72.573V108.6A3.589,3.589,0,0,1,68.988,112.185Z" transform="translate(0 0)" /**fill="#fff"*/ />
        </g>
      </svg>

  },
  {
    title: 'Digital Marketing',
    desc: 'Let us bring your brand to life with visually stunning and user-friendly websites that leave a lasting impression.',
    href: '/services',
    iconSvg:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.862 64.066">
        <g id="play-ad-svgrepo-com" transform="translate(-0.52 -0.545)">
          <circle id="Ellipse_4" data-name="Ellipse 4" cx="5.479" cy="5.479" r="5.479" transform="translate(27.972 45.417)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <path id="Path_29" data-name="Path 29" d="M9.13,28.863h0a8.261,8.261,0,0,1,8.233-8.233h0A8.261,8.261,0,0,1,25.6,28.863h0" transform="translate(16.088 35.745)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <circle id="Ellipse_5" data-name="Ellipse 5" cx="5.479" cy="5.479" r="5.479" transform="translate(49.916 45.417)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <path id="Path_30" data-name="Path 30" d="M16.78,28.863h0a8.261,8.261,0,0,1,8.233-8.233h0a8.233,8.233,0,0,1,8.233,8.233h0" transform="translate(30.382 35.745)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <circle id="Ellipse_6" data-name="Ellipse 6" cx="5.479" cy="5.479" r="5.479" transform="translate(6.028 45.417)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <path id="Path_31" data-name="Path 31" d="M1.48,28.863h0A8.233,8.233,0,0,1,9.713,20.63h0a8.261,8.261,0,0,1,8.233,8.233h0" transform="translate(1.794 35.745)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <rect id="Rectangle_30" data-name="Rectangle 30" width="49.396" height="35.656" transform="translate(8.753 1.5)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <path id="Path_32" data-name="Path 32" d="M19.273,10.411l-8.233,4.1V6.28Z" transform="translate(19.657 8.932)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
          <line id="Line_1" data-name="Line 1" x2="65.862" transform="translate(0.52 1.5)" fill="none" strokeMiterlimit="10" strokeWidth="1.91" />
        </g>
      </svg>

  },
  {
    title: 'App Development',
    href: '/services',
    desc: 'Let us bring your brand to life with visually stunning and user-friendly websites that leave a lasting impression.',
    iconSvg:
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  },
  {
    title: 'Software Development',
    href: '/services',
    desc: 'Let us bring your brand to life with visually stunning and user-friendly websites that leave a lasting impression.',
    iconSvg:
      <svg id="software-development-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 101.9">
        <path id="Path_327" data-name="Path 327" d="M3.34,0h116.2a3.346,3.346,0,0,1,3.34,3.34V80.32a3.346,3.346,0,0,1-3.34,3.34H3.34A3.346,3.346,0,0,1,0,80.32V3.34A3.346,3.346,0,0,1,3.34,0ZM81.7,67.73,65.64,58V51.83L81.7,42.1v7.33l-9.76,5.5,9.76,5.5v7.3Zm9.97,0L107.73,58V51.83L91.67,42.1v7.33l9.76,5.5-9.76,5.5v7.3ZM38.64,43.98l3.83,3.83a2.589,2.589,0,0,1,0,3.66l-3.08,3.08a20.445,20.445,0,0,1,1.91,5.1h3.99a2.6,2.6,0,0,1,2.59,2.59v5.41a2.6,2.6,0,0,1-2.59,2.59H40.93a20.271,20.271,0,0,1-1.51,3.66h75.51a2.962,2.962,0,0,0,2.95-2.95V8.19a2.955,2.955,0,0,0-2.95-2.95H7.96A2.949,2.949,0,0,0,5.01,8.19V42.8a2.584,2.584,0,0,1,3.42.21l3.08,3.08a20.445,20.445,0,0,1,5.1-1.91V40.19a2.6,2.6,0,0,1,2.59-2.58h5.41A2.6,2.6,0,0,1,27.2,40.2v4.35a20.578,20.578,0,0,1,4.95,2.26l2.82-2.83a2.6,2.6,0,0,1,3.67,0ZM21.22,52.3a11.956,11.956,0,0,1,7.06,21.6H14.16a11.956,11.956,0,0,1,7.06-21.6ZM13.65,24.25h7.67a1.084,1.084,0,0,1,1.07,1.07V27.5a1.091,1.091,0,0,1-1.07,1.07H13.65a1.078,1.078,0,0,1-1.07-1.07V25.32a1.059,1.059,0,0,1,1.07-1.07Zm12.7-11.13H56.03a1.078,1.078,0,0,1,1.07,1.07v2.18a1.078,1.078,0,0,1-1.07,1.07H26.35a1.071,1.071,0,0,1-1.07-1.07V14.19a1.071,1.071,0,0,1,1.07-1.07Zm-12.7,0h7.67a1.071,1.071,0,0,1,1.07,1.07v2.18a1.071,1.071,0,0,1-1.07,1.07H13.65a1.071,1.071,0,0,1-1.07-1.07V14.19a1.059,1.059,0,0,1,1.07-1.07ZM38.36,24.25H87.61a1.084,1.084,0,0,1,1.07,1.07V27.5a1.1,1.1,0,0,1-1.07,1.07H38.36a1.078,1.078,0,0,1-1.07-1.07V25.32a1.071,1.071,0,0,1,1.07-1.07Zm-12.15,0h7.67a1.084,1.084,0,0,1,1.07,1.07V27.5a1.091,1.091,0,0,1-1.07,1.07H26.21a1.078,1.078,0,0,1-1.07-1.07V25.32a1.065,1.065,0,0,1,1.07-1.07ZM46.29,88.27h30.3c.08,5.24,2.24,9.93,8.09,13.63H38.2c4.68-3.39,8.11-7.51,8.09-13.63Z" fill-rule="evenodd" />
      </svg>

  },
  {
    title: 'Engineering',
    href: '/services',
    desc: 'Let us bring your brand to life with visually stunning and user-friendly websites that leave a lasting impression.',
    iconSvg:
      <svg id="settings-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 122.877 95.086">
        <path id="Path_328" data-name="Path 328" d="M66.605,9.676a3.89,3.89,0,0,0-5.583,0l-4.255,4.241a28.269,28.269,0,0,0-3.61-1.96,37.552,37.552,0,0,0-3.852-1.5V3.931A3.782,3.782,0,0,0,48.164,1.14,3.778,3.778,0,0,0,45.374,0H37.187a3.823,3.823,0,0,0-2.75,1.14,3.761,3.761,0,0,0-1.168,2.791V9.9A29.527,29.527,0,0,0,29.3,11.125a30.685,30.685,0,0,0-3.663,1.691L20.922,8.172A3.606,3.606,0,0,0,18.2,6.991a3.86,3.86,0,0,0-2.792,1.181l-5.73,5.745a3.888,3.888,0,0,0,0,5.582l4.242,4.255a28.306,28.306,0,0,0-1.959,3.608,37.763,37.763,0,0,0-1.5,3.853H3.933a3.783,3.783,0,0,0-2.792,1.14A3.791,3.791,0,0,0,0,35.148v8.187a3.832,3.832,0,0,0,1.14,2.751,3.763,3.763,0,0,0,2.792,1.167H9.9a29.5,29.5,0,0,0,1.222,3.971,36.546,36.546,0,0,0,1.691,3.744L8.172,59.6a3.607,3.607,0,0,0-1.181,2.726,3.859,3.859,0,0,0,1.181,2.792l5.745,5.811a4.087,4.087,0,0,0,5.583,0l4.254-4.321a28.647,28.647,0,0,0,3.61,1.96,37.875,37.875,0,0,0,3.852,1.5v6.523a3.9,3.9,0,0,0,3.932,3.932h8.186a3.82,3.82,0,0,0,2.751-1.143,3.758,3.758,0,0,0,1.167-2.789V70.618A29.285,29.285,0,0,0,51.224,69.4a36.024,36.024,0,0,0,3.744-1.691L59.6,72.35a3.813,3.813,0,0,0,5.518,0l5.811-5.744a4.087,4.087,0,0,0,0-5.583l-4.321-4.255a28.45,28.45,0,0,0,1.96-3.609,38.11,38.11,0,0,0,1.5-3.852h6.523a3.9,3.9,0,0,0,3.931-3.933V37.188a3.829,3.829,0,0,0-1.142-2.752,3.754,3.754,0,0,0-2.789-1.167H70.618A33.011,33.011,0,0,0,69.4,29.338,29.4,29.4,0,0,0,67.7,25.632l4.645-4.709A3.608,3.608,0,0,0,73.531,18.2a3.856,3.856,0,0,0-1.181-2.792L66.605,9.676Zm45.313,43.973a2.092,2.092,0,0,0-1.627-.376,2.07,2.07,0,0,0-1.4.9l-1.908,2.7a15.645,15.645,0,0,0-2.144-.721,20.033,20.033,0,0,0-2.231-.451l-.616-3.538a2.145,2.145,0,0,0-2.505-1.76l-4.441.774a2.113,2.113,0,0,0-1.383.879,2.06,2.06,0,0,0-.369,1.625l.564,3.238a15.9,15.9,0,0,0-2.037,1.038,16.485,16.485,0,0,0-1.828,1.264l-3-2.073a2,2,0,0,0-1.59-.383,2.128,2.128,0,0,0-1.4.9l-2.564,3.659a2.14,2.14,0,0,0,.528,3.027l2.7,1.907a15.466,15.466,0,0,0-.721,2.144,20.083,20.083,0,0,0-.452,2.231l-3.538.616a2.145,2.145,0,0,0-1.76,2.505l.773,4.441a2.1,2.1,0,0,0,.88,1.383,2.063,2.063,0,0,0,1.624.369l3.239-.564a16.254,16.254,0,0,0,1.038,2.039A19.871,19.871,0,0,0,87.027,83.3l-2.081,2.952a1.987,1.987,0,0,0-.383,1.59,2.118,2.118,0,0,0,.9,1.4l3.665,2.607a2.249,2.249,0,0,0,3.028-.528l1.9-2.746A15.293,15.293,0,0,0,96.2,89.3a19.875,19.875,0,0,0,2.23.45l.618,3.54a2.148,2.148,0,0,0,2.5,1.76l4.439-.775a2.112,2.112,0,0,0,1.386-.879,2.062,2.062,0,0,0,.368-1.624l-.565-3.241a15.931,15.931,0,0,0,2.04-1.037,20.533,20.533,0,0,0,1.87-1.27l2.951,2.081a2.1,2.1,0,0,0,2.992-.523l2.609-3.665a2.254,2.254,0,0,0-.528-3.028l-2.748-1.9a15.3,15.3,0,0,0,.722-2.144,20.519,20.519,0,0,0,.452-2.232l3.537-.616a2.146,2.146,0,0,0,1.76-2.5l-.775-4.441a2.112,2.112,0,0,0-.879-1.384,2.063,2.063,0,0,0-1.624-.369l-3.239.565a18.041,18.041,0,0,0-1.035-2.017,16.332,16.332,0,0,0-1.267-1.85l2.074-2.995a1.977,1.977,0,0,0,.38-1.59,2.111,2.111,0,0,0-.9-1.4l-3.653-2.562ZM99.16,64.929a7.835,7.835,0,0,1,3.147.075,7.828,7.828,0,0,1,4.878,3.429,8.043,8.043,0,0,1,1.063,6.086,7.844,7.844,0,0,1-3.429,4.876,8.037,8.037,0,0,1-6.085,1.062,7.836,7.836,0,0,1-4.877-3.428,8.056,8.056,0,0,1-1.063-6.085,7.816,7.816,0,0,1,3.429-4.877,7.868,7.868,0,0,1,2.937-1.138Zm-58.9-40.7a15.919,15.919,0,0,1,6.252,1.248,15.811,15.811,0,0,1,8.536,8.534,16.294,16.294,0,0,1,0,12.508,15.806,15.806,0,0,1-8.536,8.536,16.292,16.292,0,0,1-12.507,0,15.826,15.826,0,0,1-8.535-8.536,16.294,16.294,0,0,1,0-12.508,15.831,15.831,0,0,1,8.535-8.534,15.933,15.933,0,0,1,6.255-1.248Z" />
      </svg>

  },
]

const DesktopServicesMenuItem = ({
  icon,
  lable,
  href
}: {
  icon: any,
  lable: string,
  href?: string
}) => {
  return (
    <Link href={href || '#'} className='rounded-xl bg-primary/10 px-5 py-2 flex gap-5 items-center group hover:bg-primary hover:text-primary-foreground duration-200 transition-all  [&>*]:duration-200 [&>*]:transition-all'>
      <div className='bg-contain aspect-square max-w-[50px] w-full group-hover:fill-primary-foreground fill-primary stroke-primary group-hover:stroke-primary-foreground flex items-center' >
        {icon}
      </div>
      <div><h3 className='text-slate-700 text-lg font-bold group-hover:text-primary-foreground col-span-2 leading-tight'>{lable}</h3></div>
    </Link>
  )
}

const DesktopServicesMenu = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-[700px] grid grid-cols-2 gap-3 p-2'>
          {
            contents.map(cont => {
              return (
                <DesktopServicesMenuItem key={nanoid()} icon={cont.iconSvg} lable={cont.title} href={cont.href} />
              )
            })
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default DesktopServicesMenu