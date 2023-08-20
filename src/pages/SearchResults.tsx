import Section from "../components/Section/Section.tsx";
import Typography from "../components/Typography/Typography.tsx";
import { Form, Formik } from "formik";
import SearchBar from "../components/SearchBar/SearchBar.tsx";
import FilterButton from "../components/FilterButton/FilterButton.tsx";
import DropDown from "../components/DropDown/DropDown.tsx";


const SearchResults = () => {
	return (
		<div>
			<section className={'w-full bg-yellow100 px-4 pt-6 pb-[80px] md:py-[56px] md:px-6 lg:pt-11 lg:pb-[56px] lg:pl-[80px]'} >
				<Typography variant={'h1'} component={'h1'} className={'mb-12'}>Проєкти</Typography>
				<div>
					<Formik
						initialValues={{ search: '', country: '', option: 'Усі' }}
						onSubmit={values => {
							console.log('search:', values.search)
							console.log('country:', values.country)
							console.log('country:', values.option)
						}}>

						{({ values, setFieldValue, handleChange }) => (
							<Form>
								<div className={'md:flex md:mb-[10px] md:gap-[20px] md:w-full lg:mb-[18px]'}>
									<div className={'md:w-[350px] lg:w-[413px]'}>
										<SearchBar id={'search'} name={'search'} value={values.search} onChange={handleChange} disabled={false} />
									</div>
									<div className={'my-6 md:my-0 md:w-[350px] lg:w-[197px]'}>
										<DropDown name={'country'} cities={['Полтава']} value={values.country} onChange={handleChange} setValue={setFieldValue} placeholder={'Країна / місто'} />
									</div>
								</div>
								<div className={'flex overflow-x-auto gap-4 search-mob'}>
									<FilterButton id={'category'} label={'Усі'} name={'option'} value={'Усі'} onChange={handleChange} checked={true} className={'whitespace-nowrap '}/>
									<FilterButton id={'category'} label={'Реабілітація'} name={'option'} value={'Реабілітація'} onChange={handleChange} className={'whitespace-nowrap '}/>
									<FilterButton id={'category'} label={'Навчання'} name={'option'} value={'Навчання'} onChange={handleChange} className={'whitespace-nowrap '}/>
									<FilterButton id={'category'} label={'Юридичні послуги'} name={'option'} value={'Юридичні послуги'} onChange={handleChange} className={'whitespace-nowrap '}/>
									<FilterButton id={'category'} label={'Бізнес-підтримка'} name={'option'} value={'Бізнес-підтримка'} onChange={handleChange} className={'whitespace-nowrap '}/>
								</div>

							</Form>
						)}

					</Formik>
				</div>


			</section>
			<Section title={'Знайдено результатів: 33'}>

			</Section>
		</div>
	);
};

export default SearchResults;