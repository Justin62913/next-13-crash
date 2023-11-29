import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await fetch(`https://api.github.com/repos/justin62913/${name}/contents`, {next:{revalidate: 60}});
    const repo = await response.json();

    return repo;
}



export default async function RepoDirs({ name }) {
    const content = await fetchRepoContents(name);
    const dirs = content.filter(entry => entry.type === 'dir');
    return <>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dir) =>(
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>
                        {dir.path}
                    </Link>
                </li>
            ))}
        </ul>
    </>
}