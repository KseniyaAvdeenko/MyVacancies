import React, {FC} from 'react';
import {Status} from "@/interface/IVacancy";

interface IInlineTabsProps {
    watchedTable: boolean;
    unWatchedTable: boolean;
    rejectedTable: boolean;
    archivedTable: boolean;
    setWatchedTable: Function;
    setUnWatchedTable: Function;
    setRejectedTable: Function;
    setArchivedTable: Function;
}

const InlineTabs: FC<IInlineTabsProps> = ({
                                              watchedTable,
                                              unWatchedTable,
                                              rejectedTable,
                                              archivedTable,
                                              setWatchedTable,
                                              setUnWatchedTable,
                                              setRejectedTable,
                                              setArchivedTable
                                          }) => {
    function setTableVisibility(table: Status) {
        if (table === "Unwatched") {
            setUnWatchedTable(true);
            setWatchedTable(false);
            setRejectedTable(false);
            setArchivedTable(false);
        } else if (table === "Watched") {
            setUnWatchedTable(false);
            setWatchedTable(true);
            setRejectedTable(false);
            setArchivedTable(false);
        } else if (table === "Archived") {
            setUnWatchedTable(false);
            setWatchedTable(false);
            setRejectedTable(false);
            setArchivedTable(true);
        } else if (table === "Rejected") {
            setUnWatchedTable(false);
            setWatchedTable(false);
            setRejectedTable(true);
            setArchivedTable(false);
        }
    }

    return (
        <section className="tabs w-full flex flex-row border-b-2 border-solid border-teal-900 sm:text-sm md:text-base">
            <div className={unWatchedTable
                ? "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-700 hover:bg-teal-700 cursor-pointer"
                : "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-900 hover:bg-teal-700 cursor-pointer"}
                 onClick={() => setTableVisibility('Unwatched')}>Unwatched
            </div>
            <div className={watchedTable
                ? "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-700 hover:bg-teal-700 cursor-pointer"
                : "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-900 hover:bg-teal-700 cursor-pointer"}
                 onClick={() => setTableVisibility('Watched')}>Watched
            </div>
            <div className={rejectedTable
                ? "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-700 hover:bg-teal-700 cursor-pointer"
                : "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-900 hover:bg-teal-700 cursor-pointer"}
                 onClick={() => setTableVisibility('Rejected')}>Rejected
            </div>
            <div className={archivedTable
                ? "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-700 hover:bg-teal-700 cursor-pointer"
                : "tab mx-2.5 p-2.5 sm:p-1.5 sm:mx-1 lg:p-2 lg:mx-2 2xl:p-2.5 2xl:mx-2.5 rounded-t-md bg-teal-900 hover:bg-teal-700 cursor-pointer"}
                 onClick={() => setTableVisibility('Archived')}>Archived
            </div>
        </section>
    );
};

export default InlineTabs;
