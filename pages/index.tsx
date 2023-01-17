import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="grid gap-10 bg-slate-400 py-20 px-10">
			<div className="rounded-3xl bg-white p-6 shadow-xl">
				<span className="text-3xl font-semibold"> Select Item</span>
				<div className="my-2 flex justify-between">
					<span className="text-gray-500">Grey Chair</span>
					<span className="font-semibold">$170</span>
				</div>
				<div className="flex justify-between">
					<span className="text-gray-500">Tooly Table</span>
					<span className="font-semibold">$800</span>
				</div>
				<div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
					<span>Total</span>
					<span className="font-semibold">$970</span>
				</div>
				<div className="mx-auto mt-5 w-2/4 rounded-xl bg-blue-500 p-3 text-center text-white">
					checkout
				</div>
			</div>
			<div className="rounded-2xl bg-white p-10 shadow-xl"></div>
			<div className="rounded-2xl bg-white p-10 shadow-xl"></div>
			<div className="rounded-2xl bg-white p-10 shadow-xl"></div>
		</div>
	);
};

export default Home;
