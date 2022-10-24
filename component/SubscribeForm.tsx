export const SubscribeForm = () => {
  return (
    <div id="revue-embed">
      <form
        action="https://www.getrevue.co/profile/r_graph_gallery/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        className="flex"
      >
        <div className="relative w-60">
          <input
            className="border-b-4 mr-8 py-2 px-4 w-full m-1"
            placeholder="email"
            type="email"
            name="member[email]"
            id="member_email"
          ></input>
        </div>

        <div>
          <input
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            id="member_submit"
            className="text-md ml-6 py-2 px-4 bg-reactGallery hover:bg-reactGallery text-white rounded m-1 cursor-pointer border-reactGallery border"
          ></input>
        </div>
      </form>
    </div>
  );
};
