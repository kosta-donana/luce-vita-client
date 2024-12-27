import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faVanShuttle, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { HalfWidthButton as Button } from '../common/HalfWidthButton';

type LoadingProps = {
  hasFailed: boolean;
};

export const Loading: React.FC<LoadingProps> = ({ hasFailed }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-primary-200 min-h-full flex flex-col justify-center items-center gap-8">
      {hasFailed ? (
        <>
          <div className="flex justify-center gap-5">
            <FontAwesomeIcon icon={faPlane} size="4x" />
            <FontAwesomeIcon icon={faVanShuttle} size="4x" />
            <FontAwesomeIcon icon={faCarSide} size="4x" />
          </div>
          <p className="text-2xl font-medium">로그아웃 상태에서는 이용하실 수 없습니다.</p>
          <Button
            type="button"
            bgColor="bg-slate-200"
            textColor="text-slate-600"
            handleClick={() => {
              navigate('/login');
            }}
          >
            로그인하러 가기
          </Button>
        </>
      ) : (
        <p className="text-2xl font-medium">로딩중입니다..</p>
      )}
    </div>
  );
};
