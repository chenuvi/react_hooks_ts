import React, { useCallback, useEffect, useState } from "react";

const set = new Set();

type SearchInputType = (e: React.ChangeEvent<HTMLInputElement>) => void;
type WordType = {
  id: number;
  word: string;
};

function SearchBox() {
 
  const [keyWord, setKeyWord] = useState("");

  const onKeyWordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyWord(e.currentTarget.value);
    },
    []
  );

  set.add(onKeyWordChange);

  return (
    <div>
      <SearchInput onChange={onKeyWordChange}></SearchInput>

      <hr />
      <SearchResult query={keyWord}></SearchResult>
    </div>
  );
}

const SearchInput: React.FC<{ onChange: SearchInputType }> = (props) => { 
  return (
    <>
      <input type="text" onChange={props.onChange}></input>
    </>
  );
};

const SearchResult: React.FC<{ query: string }> = (props) => {
  const [list, setList] = useState<WordType[]>([]);
  useEffect(() => {
    if (!props.query) return setList([]);
    fetch(`https://api.liqlongbin.top/v1/words?kw=${props.query}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
        setList(res.data);
      });
  }, [props.query]);
  return list.map((item) => {
    return <p key={item.id}> {item.word} </p>;
  });
};

export default SearchBox;
