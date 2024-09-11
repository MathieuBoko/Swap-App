import { format } from 'date-fns';

const Version = ({ todayDate }: {
    todayDate: Date
}) => {

    const currentYear = format(todayDate, 'yyyy');

    return (
        <>
            <div className="version">
                <div> © 2023 - {currentYear} </div>
            </div>
        </>
    );
};

export default Version;
