import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col items-center py-12 gap-6">
      <Image
        className="rounded-full"
        src="/images/profile.png"
        alt="profile"
        width={120}
        height={120}
      />
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-2xl font-black font-mono">Yoon_log</h3>
        <p className="text-gray-500 text-sm">프론트엔드 개발자 박지윤입니다.</p>
      </div>
    </div>
  );
};

export default Profile;
