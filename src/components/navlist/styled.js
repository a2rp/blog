import styled from "styled-components";

const HEADER_H = 60;

export const Styled = {
    Wrapper: styled.aside`
        width: 100%;
        background: var(--bg);
        color: var(--text);
    `,

    Main: styled.main`
        display: grid;
        grid-template-rows: auto 1fr;
        height: calc(100dvh - ${HEADER_H}px);
        padding: 12px 12px 16px;
        gap: 12px;
    `,

    SearchWrapper: styled.div`
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px;

        input {
            background: var(--card);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 10px 12px;
            border-radius: 8px;
            font-size: 13px;
            outline: none;
            transition: border-color 0.25s var(--easing),
                box-shadow 0.25s var(--easing), background 0.25s var(--easing);
        }
        input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px var(--accent-soft);
        }

        button.clear {
            display: inline-grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: var(--card);
            color: var(--text);
            border: 1px solid var(--border);
            cursor: pointer;
            transition: border-color 0.25s var(--easing),
                background 0.25s var(--easing), color 0.25s var(--easing);
        }
        button.clear:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-soft);
        }

        .meta {
            grid-column: 1 / -1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--muted);
            font-size: 12px;
            margin-top: 6px;
            padding: 0 2px;
        }
    `,

    ListWrapper: styled.div`
        overflow: auto;
        border: 1px solid var(--border);
        border-radius: 12px;
        background: var(--card);
        padding: 8px;
    `,

    UL: styled.ul`
        list-style: none;
        display: grid;
        gap: 6px;
        margin: 0;
        padding: 0;
    `,

    Item: styled.span`
        display: block;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid transparent;
        background: transparent;
        color: var(--text);
        text-decoration: none;
        transition: background 0.25s var(--easing),
            border-color 0.25s var(--easing), color 0.25s var(--easing);

        &.active {
            color: var(--accent);
            background: var(--accent-soft);
            border-color: var(--accent);
        }
        &:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--border);
        }

        .title {
            font-size: 14px;
            line-height: 1.6;
            word-break: break-word;
            overflow-wrap: anywhere;
            margin-bottom: 8px;
        }

        .metaRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .tag {
            font-size: 12px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            padding: 2px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.25s var(--easing),
                background 0.25s var(--easing), color 0.25s var(--easing);
        }
        .tag:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-soft);
        }

        .date {
            font-size: 12px;
            color: var(--muted);
            white-space: nowrap;
        }

        mark {
            background: var(--accent-soft);
            color: inherit;
            border-radius: 4px;
            padding: 0 2px;
        }
    `,
};
