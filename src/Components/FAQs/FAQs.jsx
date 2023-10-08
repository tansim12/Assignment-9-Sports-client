const FAQs = () => {
  return (
    <div className="">
      <p className="text-5xl text-center from-purple-300 mb-10 via-red-500 to-indigo-500 bg-gradient-to-br text text-transparent bg-clip-text font-black">
        FAQs
      </p>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium border border-neutral rounded-t-2xl">
          How do I purchase tickets for the upcoming sports events?
        </div>
        <div className="collapse-content bg-gray-200">
          <p>
            You can easily purchase tickets for our events by visiting the
            Tickets section on our website. Select the event you are interested
            in, choose your preferred ticket type and quantity, and proceed to
            the checkout page for secure payment.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow my-5 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium border border-neutral rounded-t-2xl">
          Is there an age restriction for attending the sports events?
        </div>
        <div className="collapse-content bg-gray-200">
          <p>
            The age restrictions may vary depending on the specific event.
            Please check the event details on our website for information
            regarding age restrictions, if any, for each event. Some events may
            have family-friendly options.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium border border-neutral rounded-t-2xl">
          Can I bring my pet to the sports event?
        </div>
        <div className="collapse-content bg-gray-200">
          <p>
            {" "}
            Generally, pets are not allowed at our sports events due to safety
            and comfort concerns for all attendees. However, some exceptions may
            apply, so please check the specific event details or contact our
            customer support for clarification.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium border border-neutral rounded-t-2xl">
          Are there any exclusive VIP packages available for events, and what do
          they include?
        </div>
        <div className="collapse-content bg-gray-200">
          <p>
            {" "}
            Yes, we offer VIP packages for certain events. These packages
            typically include premium seating, access to VIP lounges,
            complimentary refreshments, and sometimes even a meet-and-greet with
            athletes. Check the event details for specific VIP package
            offerings.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium border border-neutral rounded-t-2xl">
          How can I volunteer or get involved in organizing these sports events?
        </div>
        <div className="collapse-content bg-gray-200">
          <p>
            {" "}
            We greatly appreciate your interest in volunteering. Please visit
            our Get Involved page on the website to find information about
            volunteer opportunities, or you can reach out to our volunteer
            coordinator for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
