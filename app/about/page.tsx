'use client'

import Image from "next/image"
import AboutImage from '@/public/Images/about.png'

function AboutUs() {
  return (
    <div className="aboutusheader flex  flex-col items-center mt-[72px] justify-center">
      <div
        className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-blue-600 rounded-full blur-[190px]  absolute left-[70%] bottom-[20%]  max-md:hidden"
        data-aos="fade-up"
      />

      <div className=" relative z-20 w-[53rem] text-center max-md:w-[287px] ">
        <span className="[#d9d9e8] text-7xl font-extrabold font-['Raleway'] leading-[82px] max-md:leading-[24px] max-md:font-meduim max-md:text-[29px]">
          We are a community of developers, dreamers and{' '}
        </span>
        <span className="text-yellow-400 text-7xl font-extrabold font-['Raleway'] leading-10 max-md:text-[32px]">
          doers.
        </span>
      </div>
      <div id="image">

          <Image
            className="w-[1000px] h-[440px] mt-[20px] max-md:mr-[54px] max-md:h-[322px] max-md:w-[350px] max-md:mt-[21px] object-cover relative rounded-2xl"
            data-aos="fade-up"
            src={AboutImage}
            alt="blog-page-image"
            width={1000}
            height={500}
          />
   
        <div className="Ellipse2 z-10 w-96 h-96 opacity-80  bg-blue-600 rounded-full blur-[190px] absolute  top-[150%] max-md:hidden" />
      </div>

      <div className="mt-[5%] relative z-20">
        <div className="text-center font-['Raleway'] text-5xl font-bold  max-md:text-4xl max-md:text-left">
          Our Mission
        </div>
        <div className="mt-[50px] w-[744px] text-[#d9d9e8] font-['DM font-medium leading-6 max-md:w-[300px] max-md:text-[13px] max-md:mt-[10px]">
          Africinnovate Technologies is dedicated to empowering individuals and
          organizations across Africa through world-class technology education
          and training. We are driven by the belief that technology has the
          transformative power to elevate lives and communities. Our mission is
          to equip young people and students with the skills, knowledge, and
          practical experiences essential for success in today's dynamic and
          ever-evolving world.
        </div>
      </div>
      <div className="mt-[5%] relative z-20">
        <div className="text-center font-['Raleway'] text-5xl font-bold  max-md:text-4xl max-md:text-left">
          Our Vision
        </div>
        <div className="mt-[50px] w-[744px] text-[#d9d9e8] font-['DM font-medium leading-6 max-md:w-[300px] max-md:text-[13px] max-md:mt-[10px]">
          Our vision is to stand as the premier technology training organization
          in Africa, renowned for our unwavering commitment to excellence,
          innovation, and impactful social change. We envision a future where
          every African has seamless access to top-tier technology education and
          training, enabling them to confidently forge prosperous careers and
          businesses within the global digital economy.
        </div>
      </div>
      {/* card */}
      <div className="mt-[5%]   max-md:h-fit max-md:w-[350px] max-md:mt-[10px] max-md:ml-2 ">
        <div
          id="cardes"
          className="  md:grid md:grid-cols-2 lg:grid-cols-2  mt-[2rem]   "
        >
          <div className="flex-shrink-0   w-[400px] h-[300px]   rounded-2xl border-[0.5px] border-blue-100 pl-5 pt-2  items-center justify-center transition duration-500 hover:bg-[#00388D] hover:shadow-lg hover:border-2 border-solid  max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/[.10] flex items-center justify-center">
              {' '}
              <svg
                width={20}
                height={32}
                viewBox="0 0 20 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3548_68)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.14328 0C12.224 8.66667 -0.372342 8.69531 5.33015e-05 17.6562C0.106958 18.9181 0.375654 20.1609 0.799532 21.3542C0.488766 23.2696 0.793352 25.2343 1.66951 26.9658C2.54566 28.6972 3.94825 30.1063 5.67566 30.9904C7.40307 31.8745 9.36632 32.1881 11.2832 31.8862C13.2001 31.5842 14.9718 30.6822 16.3438 29.3099C17.5833 28.0687 18.4416 26.4986 18.8173 24.7852C19.1929 23.0717 19.0702 21.2865 18.4636 19.6406C19.2392 18.286 19.6686 16.7609 19.7136 15.2005C19.2709 11.4974 15.5834 10.4766 17.5652 6.54948C15.0235 6.69531 14.4141 8.41406 14.4193 11.0807C14.7344 14.5052 8.2188 13.9948 11.6329 9.80729C14.5678 6.20833 11.6823 1.99479 8.14328 0ZM9.72401 24.7161C10.014 24.7161 10.2975 24.8021 10.5386 24.9632C10.7797 25.1243 10.9676 25.3533 11.0786 25.6212C11.1895 25.8891 11.2186 26.1839 11.162 26.4683C11.1054 26.7527 10.9658 27.014 10.7607 27.219C10.5557 27.4241 10.2944 27.5637 10.01 27.6203C9.72564 27.6768 9.43085 27.6478 9.16294 27.5368C8.89504 27.4259 8.66606 27.2379 8.50496 26.9968C8.34385 26.7557 8.25786 26.4723 8.25786 26.1823C8.25786 25.7934 8.41233 25.4205 8.68729 25.1456C8.96225 24.8706 9.33517 24.7161 9.72401 24.7161ZM7.55214 24.0026C7.37007 24.1375 7.14299 24.197 6.91817 24.1687C6.69335 24.1403 6.48812 24.0264 6.34518 23.8506C6.20224 23.6748 6.13261 23.4506 6.15079 23.2247C6.16896 22.9989 6.27355 22.7887 6.44276 22.638C7.36109 21.8449 8.52656 21.3957 9.73964 21.3672C10.9472 21.3855 12.1094 21.8301 13.0209 22.6224C13.1901 22.7731 13.2947 22.9832 13.3129 23.2091C13.331 23.435 13.2614 23.6591 13.1185 23.835C12.9755 24.0108 12.7703 24.1247 12.5455 24.153C12.3207 24.1813 12.0936 24.1219 11.9115 23.987C11.3146 23.4527 10.5482 23.1465 9.74745 23.1224C8.93589 23.153 8.16006 23.4641 7.55214 24.0026ZM5.58599 21.5547C5.41011 21.683 5.19284 21.7413 4.97636 21.7184C4.75988 21.6954 4.55966 21.5928 4.41457 21.4306C4.26948 21.2683 4.18989 21.0578 4.19125 20.8402C4.19261 20.6225 4.27483 20.4131 4.42193 20.2526C6.11464 18.75 7.92453 17.9687 9.76828 18.0026C11.5678 18.0312 13.3542 18.8177 15.0495 20.4141C15.1337 20.4931 15.2014 20.5879 15.2489 20.693C15.2964 20.7982 15.3227 20.9117 15.3263 21.0271C15.33 21.1424 15.3108 21.2573 15.27 21.3653C15.2292 21.4733 15.1676 21.5721 15.0886 21.6562C15.0096 21.7404 14.9148 21.8081 14.8096 21.8556C14.7044 21.9031 14.5909 21.9294 14.4756 21.933C14.3602 21.9367 14.2453 21.9175 14.1374 21.8768C14.0294 21.836 13.9305 21.7743 13.8464 21.6953C12.4818 20.4115 11.0938 19.7917 9.74224 19.7578C8.34901 19.7344 6.94016 20.349 5.57557 21.5547H5.58599ZM9.85682 14.6849C11.4668 14.6854 13.0404 15.1633 14.3788 16.0581C15.7172 16.9529 16.7602 18.2245 17.3759 19.712C17.9917 21.1996 18.1525 22.8363 17.8381 24.4153C17.5237 25.9942 16.7482 27.4445 15.6096 28.5827C14.471 29.721 13.0205 30.496 11.4414 30.8099C9.86236 31.1238 8.22569 30.9624 6.73834 30.3462C5.25098 29.73 3.97975 28.6866 3.08536 27.3479C2.19097 26.0093 1.7136 24.4355 1.71359 22.8255C1.71325 21.7562 1.92367 20.6972 2.33281 19.7092C2.74196 18.7212 3.34181 17.8236 4.09809 17.0675C4.85436 16.3115 5.75222 15.7119 6.74034 15.3031C7.72846 14.8943 8.78747 14.6842 9.85682 14.6849Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3548_68">
                    <rect width="19.7135" height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="[#d9d9e8]  font-bold font-['Raleway'] text-[16px] leading-loose">
              Collaboration
            </div>

            <div
              className=" text-slate-400  font-medium font-sansleading-normal  mr-5"
              id="textsize"
            >
              We believe that we can achieve more as a team than we ever could
              individually and are eager to give and receive constructive
              feedback in order to improve.
            </div>
            <div className="w-[130px]h-[55px] px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center  mt-5 gap-2 inline-flex">
              <div className="text-blue-950  font-medium font-sans leading-normal ">
                Enroll now
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[400px] h-[300px]  rounded-2xl border-[0.5px] border-blue-100 pl-5 pt-2  items-center justify-center transition duration-500 hover:bg-[#00388D] hover:shadow-lg hover:border-2 border-solid  max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/[.10] flex items-center justify-center">
              {' '}
              <svg
                width={20}
                height={32}
                viewBox="0 0 20 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3548_68)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.14328 0C12.224 8.66667 -0.372342 8.69531 5.33015e-05 17.6562C0.106958 18.9181 0.375654 20.1609 0.799532 21.3542C0.488766 23.2696 0.793352 25.2343 1.66951 26.9658C2.54566 28.6972 3.94825 30.1063 5.67566 30.9904C7.40307 31.8745 9.36632 32.1881 11.2832 31.8862C13.2001 31.5842 14.9718 30.6822 16.3438 29.3099C17.5833 28.0687 18.4416 26.4986 18.8173 24.7852C19.1929 23.0717 19.0702 21.2865 18.4636 19.6406C19.2392 18.286 19.6686 16.7609 19.7136 15.2005C19.2709 11.4974 15.5834 10.4766 17.5652 6.54948C15.0235 6.69531 14.4141 8.41406 14.4193 11.0807C14.7344 14.5052 8.2188 13.9948 11.6329 9.80729C14.5678 6.20833 11.6823 1.99479 8.14328 0ZM9.72401 24.7161C10.014 24.7161 10.2975 24.8021 10.5386 24.9632C10.7797 25.1243 10.9676 25.3533 11.0786 25.6212C11.1895 25.8891 11.2186 26.1839 11.162 26.4683C11.1054 26.7527 10.9658 27.014 10.7607 27.219C10.5557 27.4241 10.2944 27.5637 10.01 27.6203C9.72564 27.6768 9.43085 27.6478 9.16294 27.5368C8.89504 27.4259 8.66606 27.2379 8.50496 26.9968C8.34385 26.7557 8.25786 26.4723 8.25786 26.1823C8.25786 25.7934 8.41233 25.4205 8.68729 25.1456C8.96225 24.8706 9.33517 24.7161 9.72401 24.7161ZM7.55214 24.0026C7.37007 24.1375 7.14299 24.197 6.91817 24.1687C6.69335 24.1403 6.48812 24.0264 6.34518 23.8506C6.20224 23.6748 6.13261 23.4506 6.15079 23.2247C6.16896 22.9989 6.27355 22.7887 6.44276 22.638C7.36109 21.8449 8.52656 21.3957 9.73964 21.3672C10.9472 21.3855 12.1094 21.8301 13.0209 22.6224C13.1901 22.7731 13.2947 22.9832 13.3129 23.2091C13.331 23.435 13.2614 23.6591 13.1185 23.835C12.9755 24.0108 12.7703 24.1247 12.5455 24.153C12.3207 24.1813 12.0936 24.1219 11.9115 23.987C11.3146 23.4527 10.5482 23.1465 9.74745 23.1224C8.93589 23.153 8.16006 23.4641 7.55214 24.0026ZM5.58599 21.5547C5.41011 21.683 5.19284 21.7413 4.97636 21.7184C4.75988 21.6954 4.55966 21.5928 4.41457 21.4306C4.26948 21.2683 4.18989 21.0578 4.19125 20.8402C4.19261 20.6225 4.27483 20.4131 4.42193 20.2526C6.11464 18.75 7.92453 17.9687 9.76828 18.0026C11.5678 18.0312 13.3542 18.8177 15.0495 20.4141C15.1337 20.4931 15.2014 20.5879 15.2489 20.693C15.2964 20.7982 15.3227 20.9117 15.3263 21.0271C15.33 21.1424 15.3108 21.2573 15.27 21.3653C15.2292 21.4733 15.1676 21.5721 15.0886 21.6562C15.0096 21.7404 14.9148 21.8081 14.8096 21.8556C14.7044 21.9031 14.5909 21.9294 14.4756 21.933C14.3602 21.9367 14.2453 21.9175 14.1374 21.8768C14.0294 21.836 13.9305 21.7743 13.8464 21.6953C12.4818 20.4115 11.0938 19.7917 9.74224 19.7578C8.34901 19.7344 6.94016 20.349 5.57557 21.5547H5.58599ZM9.85682 14.6849C11.4668 14.6854 13.0404 15.1633 14.3788 16.0581C15.7172 16.9529 16.7602 18.2245 17.3759 19.712C17.9917 21.1996 18.1525 22.8363 17.8381 24.4153C17.5237 25.9942 16.7482 27.4445 15.6096 28.5827C14.471 29.721 13.0205 30.496 11.4414 30.8099C9.86236 31.1238 8.22569 30.9624 6.73834 30.3462C5.25098 29.73 3.97975 28.6866 3.08536 27.3479C2.19097 26.0093 1.7136 24.4355 1.71359 22.8255C1.71325 21.7562 1.92367 20.6972 2.33281 19.7092C2.74196 18.7212 3.34181 17.8236 4.09809 17.0675C4.85436 16.3115 5.75222 15.7119 6.74034 15.3031C7.72846 14.8943 8.78747 14.6842 9.85682 14.6849Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3548_68">
                    <rect width="19.7135" height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="[#d9d9e8] text-[16px] font-bold font-['Raleway'] leading-loose">
              Openness
            </div>

            <div
              className=" text-slate-400  font-medium font-sansleading-normal  mr-5"
              id="textsize"
            >
              Embracing diverse ideas and beliefs without judgment, we foster an
              open environment where candor and respect guide our interactions.
            </div>
            <div className="w-[130px]h-[55px] px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center  mt-5 gap-2 inline-flex">
              <div className="text-blue-950  font-medium font-sans leading-normal ">
                Enroll now
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[400px] h-[300px] rounded-2xl border border-blue-100 pl-5 pt-2  items-center justify-center transition duration-500 hover:bg-[#00388D] hover:shadow-lg hover:border-2 border-solid max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/[.10] flex items-center justify-center">
              {' '}
              <svg
                width={20}
                height={32}
                viewBox="0 0 20 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3548_68)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.14328 0C12.224 8.66667 -0.372342 8.69531 5.33015e-05 17.6562C0.106958 18.9181 0.375654 20.1609 0.799532 21.3542C0.488766 23.2696 0.793352 25.2343 1.66951 26.9658C2.54566 28.6972 3.94825 30.1063 5.67566 30.9904C7.40307 31.8745 9.36632 32.1881 11.2832 31.8862C13.2001 31.5842 14.9718 30.6822 16.3438 29.3099C17.5833 28.0687 18.4416 26.4986 18.8173 24.7852C19.1929 23.0717 19.0702 21.2865 18.4636 19.6406C19.2392 18.286 19.6686 16.7609 19.7136 15.2005C19.2709 11.4974 15.5834 10.4766 17.5652 6.54948C15.0235 6.69531 14.4141 8.41406 14.4193 11.0807C14.7344 14.5052 8.2188 13.9948 11.6329 9.80729C14.5678 6.20833 11.6823 1.99479 8.14328 0ZM9.72401 24.7161C10.014 24.7161 10.2975 24.8021 10.5386 24.9632C10.7797 25.1243 10.9676 25.3533 11.0786 25.6212C11.1895 25.8891 11.2186 26.1839 11.162 26.4683C11.1054 26.7527 10.9658 27.014 10.7607 27.219C10.5557 27.4241 10.2944 27.5637 10.01 27.6203C9.72564 27.6768 9.43085 27.6478 9.16294 27.5368C8.89504 27.4259 8.66606 27.2379 8.50496 26.9968C8.34385 26.7557 8.25786 26.4723 8.25786 26.1823C8.25786 25.7934 8.41233 25.4205 8.68729 25.1456C8.96225 24.8706 9.33517 24.7161 9.72401 24.7161ZM7.55214 24.0026C7.37007 24.1375 7.14299 24.197 6.91817 24.1687C6.69335 24.1403 6.48812 24.0264 6.34518 23.8506C6.20224 23.6748 6.13261 23.4506 6.15079 23.2247C6.16896 22.9989 6.27355 22.7887 6.44276 22.638C7.36109 21.8449 8.52656 21.3957 9.73964 21.3672C10.9472 21.3855 12.1094 21.8301 13.0209 22.6224C13.1901 22.7731 13.2947 22.9832 13.3129 23.2091C13.331 23.435 13.2614 23.6591 13.1185 23.835C12.9755 24.0108 12.7703 24.1247 12.5455 24.153C12.3207 24.1813 12.0936 24.1219 11.9115 23.987C11.3146 23.4527 10.5482 23.1465 9.74745 23.1224C8.93589 23.153 8.16006 23.4641 7.55214 24.0026ZM5.58599 21.5547C5.41011 21.683 5.19284 21.7413 4.97636 21.7184C4.75988 21.6954 4.55966 21.5928 4.41457 21.4306C4.26948 21.2683 4.18989 21.0578 4.19125 20.8402C4.19261 20.6225 4.27483 20.4131 4.42193 20.2526C6.11464 18.75 7.92453 17.9687 9.76828 18.0026C11.5678 18.0312 13.3542 18.8177 15.0495 20.4141C15.1337 20.4931 15.2014 20.5879 15.2489 20.693C15.2964 20.7982 15.3227 20.9117 15.3263 21.0271C15.33 21.1424 15.3108 21.2573 15.27 21.3653C15.2292 21.4733 15.1676 21.5721 15.0886 21.6562C15.0096 21.7404 14.9148 21.8081 14.8096 21.8556C14.7044 21.9031 14.5909 21.9294 14.4756 21.933C14.3602 21.9367 14.2453 21.9175 14.1374 21.8768C14.0294 21.836 13.9305 21.7743 13.8464 21.6953C12.4818 20.4115 11.0938 19.7917 9.74224 19.7578C8.34901 19.7344 6.94016 20.349 5.57557 21.5547H5.58599ZM9.85682 14.6849C11.4668 14.6854 13.0404 15.1633 14.3788 16.0581C15.7172 16.9529 16.7602 18.2245 17.3759 19.712C17.9917 21.1996 18.1525 22.8363 17.8381 24.4153C17.5237 25.9942 16.7482 27.4445 15.6096 28.5827C14.471 29.721 13.0205 30.496 11.4414 30.8099C9.86236 31.1238 8.22569 30.9624 6.73834 30.3462C5.25098 29.73 3.97975 28.6866 3.08536 27.3479C2.19097 26.0093 1.7136 24.4355 1.71359 22.8255C1.71325 21.7562 1.92367 20.6972 2.33281 19.7092C2.74196 18.7212 3.34181 17.8236 4.09809 17.0675C4.85436 16.3115 5.75222 15.7119 6.74034 15.3031C7.72846 14.8943 8.78747 14.6842 9.85682 14.6849Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3548_68">
                    <rect width="19.7135" height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="[#d9d9e8] text-[16px] font-bold font-['Raleway'] leading-loose">
              Diligence
            </div>

            <div
              className=" text-slate-400  font-medium font-sansleading-normal  mr-5"
              id="textsize"
            >
              We hold ourselves and our colleagues accountable to a high
              standard and look for the long-term solution instead of providing
              a short-term fix.
            </div>
            <div className="w-[130px]h-[55px] px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center  mt-5 gap-2 inline-flex">
              <div className="text-blue-950  font-medium font-sans leading-normal ">
                Enroll now
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[400px]  h-[300px] rounded-2xl border border-blue-100 pl-5 pt-2  items-center justify-center transition duration-500 hover:bg-[#00388D] hover:shadow-lg hover:border-2 border-solid max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/[.10] flex items-center justify-center">
              {' '}
              <svg
                width={20}
                height={32}
                viewBox="0 0 20 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3548_68)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.14328 0C12.224 8.66667 -0.372342 8.69531 5.33015e-05 17.6562C0.106958 18.9181 0.375654 20.1609 0.799532 21.3542C0.488766 23.2696 0.793352 25.2343 1.66951 26.9658C2.54566 28.6972 3.94825 30.1063 5.67566 30.9904C7.40307 31.8745 9.36632 32.1881 11.2832 31.8862C13.2001 31.5842 14.9718 30.6822 16.3438 29.3099C17.5833 28.0687 18.4416 26.4986 18.8173 24.7852C19.1929 23.0717 19.0702 21.2865 18.4636 19.6406C19.2392 18.286 19.6686 16.7609 19.7136 15.2005C19.2709 11.4974 15.5834 10.4766 17.5652 6.54948C15.0235 6.69531 14.4141 8.41406 14.4193 11.0807C14.7344 14.5052 8.2188 13.9948 11.6329 9.80729C14.5678 6.20833 11.6823 1.99479 8.14328 0ZM9.72401 24.7161C10.014 24.7161 10.2975 24.8021 10.5386 24.9632C10.7797 25.1243 10.9676 25.3533 11.0786 25.6212C11.1895 25.8891 11.2186 26.1839 11.162 26.4683C11.1054 26.7527 10.9658 27.014 10.7607 27.219C10.5557 27.4241 10.2944 27.5637 10.01 27.6203C9.72564 27.6768 9.43085 27.6478 9.16294 27.5368C8.89504 27.4259 8.66606 27.2379 8.50496 26.9968C8.34385 26.7557 8.25786 26.4723 8.25786 26.1823C8.25786 25.7934 8.41233 25.4205 8.68729 25.1456C8.96225 24.8706 9.33517 24.7161 9.72401 24.7161ZM7.55214 24.0026C7.37007 24.1375 7.14299 24.197 6.91817 24.1687C6.69335 24.1403 6.48812 24.0264 6.34518 23.8506C6.20224 23.6748 6.13261 23.4506 6.15079 23.2247C6.16896 22.9989 6.27355 22.7887 6.44276 22.638C7.36109 21.8449 8.52656 21.3957 9.73964 21.3672C10.9472 21.3855 12.1094 21.8301 13.0209 22.6224C13.1901 22.7731 13.2947 22.9832 13.3129 23.2091C13.331 23.435 13.2614 23.6591 13.1185 23.835C12.9755 24.0108 12.7703 24.1247 12.5455 24.153C12.3207 24.1813 12.0936 24.1219 11.9115 23.987C11.3146 23.4527 10.5482 23.1465 9.74745 23.1224C8.93589 23.153 8.16006 23.4641 7.55214 24.0026ZM5.58599 21.5547C5.41011 21.683 5.19284 21.7413 4.97636 21.7184C4.75988 21.6954 4.55966 21.5928 4.41457 21.4306C4.26948 21.2683 4.18989 21.0578 4.19125 20.8402C4.19261 20.6225 4.27483 20.4131 4.42193 20.2526C6.11464 18.75 7.92453 17.9687 9.76828 18.0026C11.5678 18.0312 13.3542 18.8177 15.0495 20.4141C15.1337 20.4931 15.2014 20.5879 15.2489 20.693C15.2964 20.7982 15.3227 20.9117 15.3263 21.0271C15.33 21.1424 15.3108 21.2573 15.27 21.3653C15.2292 21.4733 15.1676 21.5721 15.0886 21.6562C15.0096 21.7404 14.9148 21.8081 14.8096 21.8556C14.7044 21.9031 14.5909 21.9294 14.4756 21.933C14.3602 21.9367 14.2453 21.9175 14.1374 21.8768C14.0294 21.836 13.9305 21.7743 13.8464 21.6953C12.4818 20.4115 11.0938 19.7917 9.74224 19.7578C8.34901 19.7344 6.94016 20.349 5.57557 21.5547H5.58599ZM9.85682 14.6849C11.4668 14.6854 13.0404 15.1633 14.3788 16.0581C15.7172 16.9529 16.7602 18.2245 17.3759 19.712C17.9917 21.1996 18.1525 22.8363 17.8381 24.4153C17.5237 25.9942 16.7482 27.4445 15.6096 28.5827C14.471 29.721 13.0205 30.496 11.4414 30.8099C9.86236 31.1238 8.22569 30.9624 6.73834 30.3462C5.25098 29.73 3.97975 28.6866 3.08536 27.3479C2.19097 26.0093 1.7136 24.4355 1.71359 22.8255C1.71325 21.7562 1.92367 20.6972 2.33281 19.7092C2.74196 18.7212 3.34181 17.8236 4.09809 17.0675C4.85436 16.3115 5.75222 15.7119 6.74034 15.3031C7.72846 14.8943 8.78747 14.6842 9.85682 14.6849Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3548_68">
                    <rect width="19.7135" height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="[#d9d9e8] text-[16px] font-bold font-['Raleway'] leading-loose">
              Empathy
            </div>

            <div
              className=" text-slate-400  font-medium font-sansleading-normal  mr-5"
              id="textsize"
            >
              We value diverse perspectives, seeking to understand deeply and
              respond with compassion. Our commitment to empathy fosters an
              inclusive environment.
            </div>
            <div className="w-[130px]h-[55px] px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center  mt-5 gap-2 inline-flex">
              <div className="text-blue-950  font-medium font-sans leading-normal ">
                Enroll now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
