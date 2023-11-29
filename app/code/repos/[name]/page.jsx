import { Suspense } from 'react';
import Repo from '@/app/componets/Repo';
import RepoDirs from '@/app/componets/RepoDirs';
import Link from 'next/link';


export default function RepoPage({ params: { name } }) {
    return(
        <div className="card">
            <Link className='btn btn-back' href={'/code/repos'}>Back to Repositories</Link>
            <Suspense fallback={<h3>Loading repo...</h3>}> 
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<h3>Loading directories...</h3>}>
                <RepoDirs name={name} />
            </Suspense>
            
        </div>
    )
}
