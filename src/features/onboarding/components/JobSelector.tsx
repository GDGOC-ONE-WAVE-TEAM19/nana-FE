import { useState } from 'react'
import Card from '../../../shared/components/ui/Card'

export default function JobSelector() {
  const [selectedJob, setSelectedJob] = useState('')

  const jobs = ['Backend Engineer', 'Frontend Engineer', 'Full Stack Engineer', 'DevOps Engineer', 'Data Engineer']

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Target Job</h3>
      <div className="flex flex-wrap gap-2">
        {jobs.map((job) => (
          <button
            key={job}
            onClick={() => setSelectedJob(job)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedJob === job
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {job}
          </button>
        ))}
      </div>
    </Card>
  )
}
