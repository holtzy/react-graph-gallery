export const ConclusionSection = () => {
  return (
    <div
      style={{ backgroundColor: '#121212' }}
      className="text-white font-light text-md wrapper mt-24 pt-24 flex flex-col justify-center items-start"
    >
      <p className="text-gray-400 text-xl uppercase">hmm</p>
      <p className="text-7xl">Conclusion</p>

      <p>
        This project is inspired by the work of{' '}
        <a href="https://excelcharts.com/beautiful-but-terrible-population-pyramids/">
          Jorge Camoes
        </a>
        . His approach resonated with me, especially since I'm not fond of
        getting older. So I decided it was a great time to dive into some{' '}
        <a href="https://www.d3-graph-gallery.com">D3.js</a>
        work.
      </p>
      <p>
        If you're curious about how this is made, most of the concepts are
        explained in my{' '}
        <a href="https://www.react-graph-gallery.com">React Graph Gallery</a>,
        and the code is available on GitHub.
      </p>
      <p>
        Essentially, it's a substantial amount of <b>React</b> code for
        rendering, with a bit of <b>D3.js</b> to calculate the shape positions.{' '}
        <b>React Spring</b> is used for all the animations. That's it!
      </p>
      <p>
        Oh, and the data comes from the{' '}
        <a href="https://population.un.org/wpp/Download/Standard/CSV/">
          United Nations
        </a>
        . Thanks to them for providing it!
      </p>
    </div>
  );
};
