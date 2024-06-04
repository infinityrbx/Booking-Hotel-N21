import classNames from 'classnames/bind';
import styles from './SearchForm.module.sass';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TextField from '../../../components/TextField';
import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

const cx = classNames.bind(styles);

function SearchForm() {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openDate, setOpenDate] = useState(false);

    type Options = {
        adult: number;
        children: number;
        room: number;
    };
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState<Options>({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name: keyof Options, operation: string) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const wrapperRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setOpenDate(false);
            setOpenOptions(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = () => {};

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            destination,
            dates,
            options,
        };
        console.log('Form Data:', formData);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('background')} src="./assets/image7.jpg" alt="background" />
            </div>
            <h1 className={cx('heading')}>Enjoy your Vacation</h1>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={cx('destination')}>
                    <h4>Destination</h4>
                    <TextField type="text" placeholder="Where are you going ?" value={destination} onChange={(e) => setDestination(e.target.value)}/>
                </div>
                <div className={cx('checkin')}>
                    <h4>Check in - Check out</h4>

                    <span className={cx('date-picker')} onClick={() => setOpenDate(!openDate)}>
                        {dates[0].startDate && dates[0].endDate
                            ? `${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`
                            : 'Select dates'}
                    </span>
                    {openDate && (
                        <div ref={wrapperRef} className={cx('date-wrapper')}>
                            <DateRange
                                onChange={(item) => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                minDate={new Date()}
                                ranges={dates}
                            />
                        </div>
                    )}
                </div>
                <div className={cx('guestes')}>
                    <h4>Guestes</h4>
                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className={cx('guests')}
                    >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    {openOptions && (
                        <div ref={wrapperRef} className={cx('guests-options')}>
                            <div className={cx('optionItem')}>
                                <span className="optionText">Adult</span>
                                <div className={cx('optionCounter')}>
                                    <button
                                        disabled={options.adult <= 1}
                                        className={cx('optionCounterButton')}
                                        onClick={() => handleOption('adult', 'd')}
                                    >
                                        -
                                    </button>
                                    <span className={cx('optionCounterNumber')}>{options.adult}</span>
                                    <button
                                        className={cx('optionCounterButton')}
                                        onClick={() => handleOption('adult', 'i')}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className={cx('optionItem')}>
                                <span className="optionText">Children</span>
                                <div className={cx('optionCounter')}>
                                    <button
                                        disabled={options.children <= 0}
                                        className={cx('optionCounterButton')}
                                        onClick={() => handleOption('children', 'd')}
                                    >
                                        -
                                    </button>
                                    <span className={cx('optionCounterNumber')}>{options.children}</span>
                                    <button
                                        className={cx('optionCounterButton')}
                                        onClick={() => handleOption('children', 'i')}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className={cx('optionItem')}>
                                <span className="optionText">Room</span>
                                <div className={cx('optionCounter')}>
                                    <button
                                        disabled={options.room <= 1}
                                        className={cx('optionCounterButton')}
                                        onClick={() => handleOption('room', 'd')}
                                    >
                                        -
                                    </button>
                                    <span className={cx('optionCounterNumber')}>{options.room}</span>
                                    <button
                                        className={cx('optionCounterButton')}
                                        onClick={() => handleOption('room', 'i')}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className={cx('submit-btn')} type='submit'><FontAwesomeIcon icon={faSearch}/></button>
            </form>
        </div>
    );
}

export default SearchForm;
