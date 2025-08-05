function SkillList({ src, skill}) {
  return (
    <span>
      <img src={src} alt="Check Mark" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
