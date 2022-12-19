import { Link } from "react-router-dom";

const Login = () => {
  const loginImg = `${process.env.PUBLIC_URL}/assets/img/char-login-cat.svg`;
  const kakaoImg = `${process.env.PUBLIC_URL}/assets/img/logo-kakao.png`;
  const googleImg = `${process.env.PUBLIC_URL}/assets/img/logo-google.png`;
  const faceBookImg = `${process.env.PUBLIC_URL}/assets/img/logo-facebook.png`;
  const basicImg = `${process.env.PUBLIC_URL}/assets/img/char-loading-cat.svg`;

  return (
    <section className="page">
      <h1 className="ir">메인 로그인 화면</h1>
      <div className="bg-cyan-300 h-3/5 flex justify-center items-center">
        <img src={loginImg} alt="애니멀톡" className="w-[145px] h-[200px]" />
      </div>
      <article className="bg-slate-200 h-2/5 shrink-0">
        <h2 className="ir">로그인 하기</h2>
        <ul className="flex flex-col items-center">
          <li
            onClick={() => {
              alert("이메일로 로그인과 회원가입 버튼만 작동합니다.");
            }}
            className="first:mt-[50px] mb-[10px] last:mb-[0px]"
          >
            <button className="rounded-[44px] min-w-[320px] min-h-[44px] leading-[44px] border-[#f2c94c] border-[1px] bg-white text-center relative text-[#767676]">
              <img
                src={kakaoImg}
                alt="카카오톡 계정으로 로그인"
                className="w-[18px] h-[18px] inline absolute left-[20px] top-[50%] translate-y-[-50%]"
              />
              카카오톡 계정으로 로그인
            </button>
          </li>
          <li
            onClick={() => {
              alert("이메일로 로그인과 회원가입 버튼만 작동합니다.");
            }}
            className="first:mt-[50px] mb-[10px] last:mb-[0px]"
          >
            <button className="rounded-[44px] min-w-[320px] min-h-[44px] leading-[44px] border-[#767676] border-[1px] bg-white text-center relative text-[#767676]">
              <img
                src={googleImg}
                alt="구글 계정으로 로그인"
                className="w-[18px] h-[18px] inline absolute left-[20px] top-[50%] translate-y-[-50%]"
              />
              구글 계정으로 로그인
            </button>
          </li>
          <li
            onClick={() => {
              alert("이메일로 로그인과 회원가입 버튼만 작동합니다.");
            }}
            className="first:mt-[50px] mb-[10px] last:mb-[0px]"
          >
            <button className="rounded-[44px] min-w-[320px] min-h-[44px] leading-[44px] border-[#2D9CDB] border-[1px] bg-white text-center relative text-[#767676]">
              <img
                src={faceBookImg}
                alt="페이스북 계정으로 로그인"
                className="w-[18px] h-[18px] inline absolute left-[20px] top-[50%] translate-y-[-50%]"
              />
              페이스북 계정으로 로그인
            </button>
          </li>
          <li className="first:mt-[50px] mb-[10px] last:mb-[0px]">
            <Link
              to="/login/email"
              className="inline-block rounded-[44px] min-w-[320px] min-h-[44px] leading-[44px] border-[green] border-[1px] bg-white text-center relative text-[#767676]"
            >
              <img
                src={basicImg}
                alt="이메일로 로그인"
                className="w-[18px] h-[18px] inline absolute left-[20px] top-[50%] translate-y-[-50%]"
              />
              이메일로 로그인
            </Link>
          </li>
        </ul>
        <Link className="block text-center mt-[15px] text-[#797979]" to="/join">
          회원가입
        </Link>
      </article>
    </section>
  );
};

export default Login;
