import {CircularProgress} from '@mui/material'

export default function Rating (props) {
    const {rate} = props
    return <div className='bg-dark d-inline-block text-light rounded-circle'>
        <div className='d-flex align-items-center justify-content-center'>
            <h5 className="position-absolute m-0">{rate*10}</h5>
            <CircularProgress variant="determinate" value={rate*10} />
            </div>
    </div>
}