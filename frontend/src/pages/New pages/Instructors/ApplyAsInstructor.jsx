// import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import apiClients from "src/apiClients/apiClients";
import { BASE_URL, SECOND_BASE_URL } from "src/apiClients/config";
import CTASection from "src/components/New components/CTASection";
import ParagraphText from "src/components/New components/ParagraphText";
import PrimaryButton from "src/components/New components/PrimaryButton";
import { validateEmail } from "src/utils/validateFields/ValidateEmail";
import validatePhoneNumber from "src/utils/validateFields/validatePhoneNumber";
function ApplyAsInstructor() {
  const CTA = {
    // label: "Transform Learning, Simplify Teaching",
    heading: "Share Your Expertise",
    description:
      "Join our tutor network and teach passionate learners through a smart virtual platform.",
    ctaName: "Become a Tutor",
    embedPopupFormId: "mbambgcjdr6kv0zhhvt",
  };
  const formdata = {
    firstname: "",
    phone: "",
    email: "",
    message: "",
    type: "Application of an instructor",
  };
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(formdata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow only alphabets and spaces
    if (name === "firstname" && /[^a-zA-Z\s]/.test(value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const newErrors = {};
      const requiredFields = ["firstname", "email", "message"];
      requiredFields.forEach((field) => {
        if (
          formData[field] === undefined ||
          formData[field] === null ||
          formData[field] === ""
        ) {
          newErrors[field] = `This ${field} field is required.`;
        }
      });
      if (formData.email && !validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (formData.phone && !validatePhoneNumber(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number.";
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setLoading(true);
        setErrors({});
        const response = await apiClients.contact(formData);
        setFormData(formdata);
        if (response) {
          if (response.success === true) {
            toast.success(response.message);
            setLoading(false);
            // navigate("/");
          } else {
            setLoading(false);
            toast.error(response.message);
          }
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    if (name === "email" && !validateEmail(value)) {
      toast.error("Please enter a valid email address");
      newErrors.email = "Please enter a valid email address";
    } else {
      delete newErrors.email;
    }
    if (name === "phone" && !validatePhoneNumber(value)) {
      toast.error("Please enter a valid phone number");
      newErrors.phone = "Please enter a valid phone number";
    } else {
      delete newErrors.phone;
    }
    setErrors(newErrors);
  };

  // const handleSignUp = async () => {
  //   await loginWithRedirect({
  //     appState: {
  //       returnTo: `/callback?role=Moderator`,
  //     },
  //     authorizationParams: {
  //       prompt: "login",
  //       screen_hint: "signup",
  //     },
  //   });
  // };

  const countryCodes = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "Russia", code: "+7", flag: "🇷🇺" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
    { name: "Spain", code: "+34", flag: "🇪🇸" },
    { name: "Italy", code: "+39", flag: "🇮🇹" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
    // Add more countries as needed
  ];

  return (
    <div>
      <Helmet>
        <title>
          Become an Online Tutor | Teach & Earn Flexibly Across India
        </title>
        <meta
          name="description"
          content="Join Atlearn as an online tutor and start teaching from home. Earn money, set your schedule, and share your knowledge with students across India."
        />
        <link rel="canonical" href={`${BASE_URL}/become-a-tutor`} />
      </Helmet>
      <section>
        {/* bannaer section */}
        <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
          <div className="container">
            <div className="flex flex-col items-center text-center w-full ">
              {/* banner Left */}
              <div data-aos="fade-up" className="w-4/5">
                <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                  Join Our Teaching Community
                </h3>
                <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold ">
                  Teach Students & Earn Money
                  <span className="text-secondaryColor">.</span>
                </h1>
                <p className="text-size-15 md:text-lg text-white  font-medium">
                  Share Your Knowledge, Shape the Future
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="absolute left-1/2 bottom-[15%] animate-spin-slow"
              src="./assets/images/register/register__2.png"
              alt="register icon"
              title="register icon"
            />
            <img
              className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
              src="./assets/images/herobanner/herobanner__6.png"
              alt="herobanner icon"
              title="herobanner icon"
            />
            <img
              className="absolute right-[5%] bottom-[15%]"
              src="./assets/images/herobanner/herobanner__7.png"
              alt="herobanner icon"
              title="herobanner icon"
            />
            <img
              className="absolute top-[5%] left-[45%]"
              src="./assets/images/herobanner/herobanner__7.png"
              alt="herobanner icon"
              title="herobanner icon"
            />
          </div>
        </div>
      </section>

      {/*apply  section */}
      <section>
        <div className="container py-10" data-aos="fade-up">
          <h2 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark leading-1.2 pb-15px border-b border-borderColor dark:border-borderColor-dark mb-10">
            Apply As Tutor
          </h2>
          <ParagraphText>
            {`Join <a href=${BASE_URL} title="Atlearn" class="text-blue" target="_blank" rel="noopener noreferrer" >Atlearn's</a> community of educators and make a difference in <b>online learning</b>. By applying as tutor, you can become an <b>online tutor in India</b> and bring your expertise to students worldwide, teaching courses tailored to your strengths and interests. Our application process is simple and designed to welcome skilled tutors across a wide range of subjects. Start sharing your knowledge, inspiring students, and becoming part of a <b>dynamic LMS e-learning</b> platform.`}
          </ParagraphText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
            {/* apply left */}
            <div data-aos="fade-up">
              <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                Become an Tutor
              </h6>
              <ParagraphText>
                {`<a href=https://www.youtube.com/shorts/BkOWibVt29o title="Becoming a tutor" class="text-blue" target="_blank" rel="noopener noreferrer" >Becoming a tutor</a> with Atlearn means more than just
                teaching—it's about fostering growth and engagement in a
                supportive environment. With our <b>teaching tools</b> for the <b>virtual classroom</b>, you'll create <b>interactive lessons</b>, engage with students in real-time, and track their progress. We make it easy
                for tutors to succeed by offering resources, training, and
                a seamless platform to deliver effective and impactful online
                education.`}
              </ParagraphText>
              <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                Tutor Guidelines
              </h6>
              <ParagraphText>
                To maintain a high-quality learning experience for all, our
                tutors adhere to a few core guidelines:
              </ParagraphText>
              {/* rules list */}
              <ul className="mb-30px space">
                <li className="mt-5 flex items-center gap-5">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                  <ParagraphText>
                    {`<b>Content Quality</b>: Provide accurate, engaging, and
                    comprehensive lessons.`}
                  </ParagraphText>
                </li>
                <li className="mt-5 flex items-center gap-5">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                  <ParagraphText>
                    {`<b>Student Engagement</b>: Actively engage with students, answer
                    questions, and foster a <b>collaborative environment</b>.`}
                  </ParagraphText>
                </li>
                <li className="mt-5 flex items-center gap-5">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                  <ParagraphText>
                    {` <b>Professionalism</b>: Uphold respectful communication and a
                    commitment to student success.`}
                  </ParagraphText>
                </li>
                <li className="mt-5 flex items-center gap-5">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                  <ParagraphText>
                    {`<b>Platform Usage</b>: Familiarize yourself with Atlearn's
                    features, such as <b>grading tools</b> and feedback options, to
                    enhance the learning experience.`}
                  </ParagraphText>
                </li>
              </ul>

              <ParagraphText>
                {`<a href=${BASE_URL} title="Start your journey today" class="text-blue" target="_blank" rel="noopener noreferrer" >Start your journey today</a>  and impact online education at the best
                 <a href=${SECOND_BASE_URL}/all-courses title="online course" class="text-blue" target="_blank" rel="noopener noreferrer" >online course</a> platforms for tutors!`}
              </ParagraphText>
            </div>
            {/* <div>
              <PrimaryButton onClick={() => handleSignUp()} primary={true}>
                Apply As Instructor
              </PrimaryButton>
            </div> */}

            {/* apply right*/}
            <div data-aos="fade-up">
              <div
                className="p-10px md:p-10 lg:p-5 2xl:p-10 mb-50px bg-darkdeep3 dark:bg-darkdeep3-dark text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                data-aos="fade-up"
              >
                <div className="grid grid-cols-1 mb-15px gap-15px">
                  <div>
                    <label className="mb-3 block font-semibold">
                      Name <span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      value={formData?.firstname || ""}
                      onChange={handleChange}
                      type="text"
                      id="first_name"
                      name="firstname"
                      placeholder="Enter your name"
                      className={`w-full pl-26px bg-transparent focus:outline-none 
              text-contentColor dark:text-blackColor-dark 
              placeholder:text-placeholder placeholder:opacity-80 
              h-15 leading-15 font-medium rounded  bg-whiteColor dark:bg-transparent border 
              ${
                errors.firstname
                  ? "border-red-500"
                  : " border-borderColor2 dark:border-borderColor2-dark"
              }`}
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-3 block font-semibold">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData?.email || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className={`w-full pl-26px bg-transparent focus:outline-none 
                      text-contentColor dark:text-contentColor-dark 
                      placeholder:text-placeholder placeholder:opacity-80 
                      h-15 leading-15 font-medium rounded  bg-whiteColor dark:bg-transparent border
                      ${
                        errors.email
                          ? "border-red-500"
                          : " border-borderColor2 dark:border-borderColor2-dark"
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block font-semibold">
                      Phone Number
                    </label>
                    <div
                      className={`flex items-center h-15 rounded border bg-whiteColor dark:bg-transparent overflow-y-auto
                      ${
                        errors.phone
                          ? "border-red-500"
                          : "border-borderColor2 dark:border-borderColor2-dark"
                      }`}
                    >
                      <select
                        name="countryCode"
                        value={formData?.countryCode || "+91"}
                        onChange={handleChange}
                        className="bg-transparent px-3 py-2 text-sm font-medium text-contentColor dark:text-contentColor-dark focus:outline-none"
                      >
                        {countryCodes.map((country) => (
                          <option
                            key={country.code + country.name}
                            value={country.code}
                          >
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>

                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData?.phone || ""}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full bg-transparent h-full pl-2 pr-4 focus:outline-none font-medium 
        text-contentColor dark:text-contentColor-dark placeholder:text-placeholder placeholder:opacity-80"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-15px">
                  <label className="mb-3 block font-semibold">
                    Message <span className="text-red-500">*</span>{" "}
                  </label>
                  <textarea
                    value={formData?.message || ""}
                    onChange={handleChange}
                    id="website"
                    name="message"
                    placeholder="Enter your Message here"
                    className={`${
                      !!errors.message ? "border-red-500" : "border-gray-300"
                    } w-full pl-26px bg-transparent text-contentColor dark:text-contentColor-dark border placeholder:text-placeholder placeholder:opacity-80 rounded bg-whiteColor dark:bg-transparent`}
                    cols={30}
                    rows={6}
                  />
                </div>

                <div className="mt-15px">
                  <PrimaryButton
                    primary={true}
                    onClick={handleSubmit}
                    loading={loading}
                  >
                    Apply Now & Start Teaching
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CTASection data={CTA} />
      </section>
    </div>
  );
}

export default ApplyAsInstructor;
