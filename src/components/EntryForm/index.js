export default function EntryForm () {
    return (
        <>
        <h2>New Entry</h2>
        <form>

        <label forHtml="motto">Motto</label>
        <input type="text" id="motto"></input>
        <label forHtml="notes">Notes</label>
        <textarea id="notes"></textarea>
        <SubmitButton>Create</SubmitButton>
        </form>
        </>
    )
}