type ExampleProp = {
    code: string
    value: any
}
type Props = {
    desc: string
    examples: ExampleProp[]
}
const Card = ({ desc, examples }: Props) => {
    return (
        <div className="card">
            <h2>{desc}</h2>
            {examples.map((example: ExampleProp) => {
                return <>
                    <code style={{ backgroundColor: "black" }}>
                        {example.code}
                    </code>
                    <div>value is {example.value}</div>
                </>
            })}
        </div>
    );
}

export default Card;

export type { ExampleProp }