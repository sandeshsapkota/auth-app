import {MutableRefObject, useEffect, useState, forwardRef, Ref, } from "react";

interface ChildPropsTypes {
    ref: MutableRefObject<any>
}

const Child = forwardRef(function Child(props: ChildPropsTypes, ref: Ref<HTMLDivElement>) {
    const [count, setCount] = useState(20);
    const getCount = () => count

    useEffect(() => {
        if (ref) {
            (ref as MutableRefObject<any>).current = {
                getCount: getCount,
            };
        }
    }, [ref, getCount]);

    return (
        <div ref={ref}>
            child component
            <div onClick={() => setCount(count + 1)}>{count}</div>
        </div>
    );
});

export default Child;
