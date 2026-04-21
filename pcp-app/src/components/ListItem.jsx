export default function ListItem({ item, testId }) {
  return <div data-testid={testId}>{JSON.stringify(item)}</div>;
}