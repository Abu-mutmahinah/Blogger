import design from "../../Assets/Images/design.png";
import principle from "../../Assets/Images/principle.png";
import enterprise from "../../Assets/Images/enterprise.png";
import handbook from "../../Assets/Images/handbook.png";
import thinking from "../../Assets/Images/thinking.png";
import leadership from "../../Assets/Images/leadership.png";
import business from "../../Assets/Images/business.png";
import animattion from "../../Assets/Images/animattion.png";
import remote from "../../Assets/Images/remote.png";
import system from "../../Assets/Images/system.png";
const book1 = [
  { id: 1, img: design },
  { id: 2, img: principle },
  { id: 3, img: leadership },
  { id: 4, img: handbook },
];

const book2 = [
  { id: 1, img: business },
  { id: 2, img: thinking },
  { id: 3, img: enterprise },
  { id: 4, img: animattion },
];
const book3 = [
  { id: 1, img: system },
  { id: 2, img: remote },
  { id: 3, img: leadership },
];
const book4 = [
  { id: 1, img: design },
  { id: 2, img: principle },
  { id: 3, img: leadership },
  { id: 4, img: handbook },
  { id: 5, img: principle },
  { id: 6, img: leadership },
  { id: 7, img: design },
];

const Library = () => {
  return (
    <div>
      <h1 className="h1 font-[900] text-2xl text-[#232e52] ml-[200px]">
        Books I've read
      </h1>
      {/* 2020 books */}
      <div>
        <h2 className="text-[#232e52] ml-[200px] font-[900] mt-5">2020</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {book1.map((item) => {
            return <img src={item.img} key={item.id} alt="" />;
          })}
        </div>
      </div>
      {/* 2019 books */}
      <div>
        <h2 className="text-[#232e52] ml-[200px] font-[900] mt-20">2019</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {book2.map((item) => {
            return <img src={item.img} key={item.id} alt="" />;
          })}
        </div>
      </div>
      {/* 2018 books */}
      <div className="">
        <h2 className="text-[#232e52] ml-[200px] font-[900] mt-20">2018</h2>
        <div className="flex flex-wrap justify-start ml-[190px] gap-10 mt-5">
          {book3.map((item) => {
            return <img src={item.img} key={item.id} alt="" />;
          })}
        </div>
      </div>

      {/* 2017 books */}

      <div className="">
        <h2 className="text-[#232e52] ml-[200px] font-[900] mt-20">2018</h2>
        <div className="flex flex-wrap justify-start ml-[190px] gap-10 mt-5">
          {book4.map((item) => {
            return <img src={item.img} key={item.id} alt="" />;
          })}
        </div>
      </div>

      <div className="footer-copyright text-center py-5">
        Copyright 2022 - Jamiu Babatunde
      </div>
    </div>
  );
};

export default Library;
