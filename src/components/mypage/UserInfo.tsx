type UserInfoProps = {
  nickname: string;
};

export const UserInfo: React.FC<UserInfoProps> = ({ nickname }) => {
  return (
    <section className="mt-6 px-8 py-7 bg-primary-300 text-white text-2xl font-medium rounded-3xl shadow-md">
      닉네임: {nickname}
      {/* TODO: 프로필 사진 등의 회원 정보 추가 및 수정 기능 구현하기 */}
    </section>
  );
};
