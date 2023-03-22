import Link from 'next/link';
import PropType from 'prop-types';

const PostCardContent = ({ postData }) => (
  <div>
    {postData
      .toString()
      .split(/(#[^\s#]+)/g)
      .map((v, i) => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
  </div>
);

PostCardContent.propTypes = { postData: PropType.string.isRequired };

export default PostCardContent;
