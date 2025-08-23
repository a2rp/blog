import { Styled } from "./styled";

export const meta = {
    title: "What Really Happens When You Type a Web Address and Press Enter?",
    slug: "what-happens-when-you-type-a-web-address",
    date: "2025-01-07",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "How The Internet Works",
    tags: ["DNS", "TLS/SSL", "HTTP", "Browser", "Servers", "Networking"],
    excerpt:
        "A restaurant-style tour of DNS lookups, TLS handshakes, HTTP requests, servers, and the browser render pipeline—what really happens after you hit Enter.",
    cover: null, // no images
};

export default function Post() {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Info>
                    <h1>{meta.title}</h1>
                    <div>
                        <strong>By:</strong> {meta.author}
                    </div>
                    <div>
                        <strong>Published on:</strong> January 7, 2025
                    </div>
                    <div>
                        <strong>Category:</strong> How The Internet Works
                    </div>
                </Styled.Info>

                <p>
                    You've done it thousands of times. You open your laptop, type
                    <code> google.com</code> or <code> netflix.com</code> into the address
                    bar, and press Enter. A second later, a webpage magically appears.
                </p>
                <p>
                    It feels like magic, but it's not. It's a breathtakingly complex
                    symphony of machines talking to each other, all in the blink of an eye.
                    As a full-stack developer who has built these systems for over a decade,
                    I still find this process beautiful.
                </p>
                <p>
                    Let's demystify the magic. Think of it like ordering food at a
                    restaurant. Here's what actually happens.
                </p>

                <h2>1. You Tell the Browser Where You Want to Go (Placing Your Order)</h2>
                <p>
                    You type the URL (the web address) and hit Enter. Your web browser (like
                    Chrome or Safari) is your personal assistant. It now has a mission: "Get
                    me the website for <code>google.com</code>."
                </p>

                <h2>
                    2. Finding the Secret Address: The DNS Lookup (Asking for Directions)
                </h2>
                <p>
                    Here's the first problem. The internet doesn't run on friendly names
                    like <code>google.com</code>. It runs on numerical addresses called IP
                    addresses, which look like <code>142.251.42.206</code>—the internet's
                    equivalent of a street address.
                </p>
                <p>
                    Your browser needs to find this secret number. So, it contacts a{" "}
                    <strong>DNS (Domain Name System) server</strong>. Think of DNS as the
                    internet's giant, super-organized phonebook.
                </p>
                <ul>
                    <li>
                        Your browser first checks its own little notepad (its <strong>cache</strong>)
                        to see if it already knows the address.
                    </li>
                    <li>If not, it asks your computer's operating system.</li>
                    <li>
                        If that fails, it sends a request to your Internet Service Provider's
                        (ISP) DNS server. This server's entire job is to look up these
                        addresses all day long.
                    </li>
                </ul>
                <p>
                    It finds the correct IP address for <code>google.com</code> and sends it
                    back to your browser. Your browser now has the exact coordinates it
                    needs.
                </p>
                <Styled.Analogy>
                    <p>
                        <strong>The Analogy:</strong> You want to go to "Tony's Pizza." You
                        don't know the address, so you pull out your phone (the DNS server),
                        look it up, and find it's at "123 Main Street" (the IP address).
                    </p>
                </Styled.Analogy>

                <h2>
                    3. Making a Secure Connection: The SSL Handshake (Knocking on the Door)
                </h2>
                <p>
                    Now that your browser knows where to go, it needs to establish a secure
                    connection. This is especially important if you're entering passwords or
                    credit card info.
                </p>
                <p>
                    Your browser contacts the server at the IP address it just found and
                    initiates a process called an <strong>SSL handshake</strong>. They
                    exchange encryption keys behind the scenes. If it's successful, you'll
                    see that little padlock icon (🔒) next to the URL in your address bar.
                    This means your connection is private and secure.
                </p>
                <Styled.Analogy>
                    <p>
                        <strong>The Analogy:</strong> You walk up to the door of "123 Main
                        Street." A bouncer checks your ID and then creates a secure, private
                        tunnel just for you to walk through. No one else can listen in.
                    </p>
                </Styled.Analogy>

                <h2>4. Making the Request: The HTTP Request (Ordering Your Food)</h2>
                <p>
                    With a secure connection established, your browser can finally ask for
                    what it wants. It sends an <strong>HTTP request</strong> to the server.
                    This is a formally structured message that says, "Hey, I'd like to see
                    the homepage, please."
                </p>
                <p>
                    This request contains information about itself, like what kind of
                    browser it is and what languages it understands.
                </p>
                <Styled.Analogy>
                    <p>
                        <strong>The Analogy:</strong> You sit down at the table, look at the
                        menu, and tell the waiter, "I'll have the margherita pizza and a
                        soda, please."
                    </p>
                </Styled.Analogy>

                <h2>
                    5. The Server Prepares Your Page (The Kitchen Gets Cooking)
                </h2>
                <p>
                    The server—which is just a powerful computer in a data center
                    somewhere—receives your request. This is where my job as a back-end
                    developer comes in.
                </p>
                <p>
                    The server doesn't just send a pre-made file. It often has to{" "}
                    <em>assemble</em> the webpage on the fly. It might need to:
                </p>
                <ul>
                    <li>Talk to a database to get your user profile.</li>
                    <li>Fetch the latest news articles.</li>
                    <li>Run complex code to generate a personalized page just for you.</li>
                </ul>
                <p>It then packages everything up into a response.</p>
                <Styled.Analogy>
                    <p>
                        <strong>The Analogy:</strong> The waiter (the server) takes your order
                        to the kitchen. The chefs (the server's software) grab the ingredients
                        (data from the database), cook the pizza (process the request), and
                        plate it up.
                    </p>
                </Styled.Analogy>

                <h2>6. The Response is Delivered (Your Food is Served)</h2>
                <p>
                    The server sends everything back to your browser. This response is
                    typically a mix of three things:
                </p>
                <ul>
                    <li>
                        <strong>HTML:</strong> The skeleton and content of the page (the crust
                        and toppings of the pizza).
                    </li>
                    <li>
                        <strong>CSS:</strong> The styling and design that makes it look pretty
                        (the plate, the garnish, the layout).
                    </li>
                    <li>
                        <strong>JavaScript:</strong> The interactive elements that make it
                        dynamic (the ability to drag a slice, add more cheese, etc.).
                    </li>
                </ul>
                <Styled.Analogy>
                    <p>
                        <strong>The Analogy:</strong> The waiter brings your beautifully
                        plated pizza and drink to the table.
                    </p>
                </Styled.Analogy>

                <h2>7. The Browser's Final Touch (You Eat the Food)</h2>
                <p>
                    Your browser's job isn't done. It receives all these files and must{" "}
                    <strong>render</strong> the page. It interprets the HTML, applies the
                    CSS styling, and runs the JavaScript. This is the front-end developer's
                    specialty.
                </p>
                <p>
                    You'll see the page being built—text might appear first, then images pop
                    in, and finally, interactive elements become clickable. Once it's
                    finished, you have the fully-formed website you wanted.
                </p>
                <Styled.Analogy>
                    <p>
                        <strong>The Analogy:</strong> You finally get to eat the pizza and
                        enjoy the meal.
                    </p>
                </Styled.Analogy>

                <p>
                    And all of this—this entire intricate dance between computers across
                    potentially thousands of miles—happens in <strong>less than a second</strong>.
                </p>
                <p>
                    The next time you press Enter, take a second to appreciate the
                    incredible technological symphony you just conducted. It's a miracle of
                    modern engineering, and it's anything but magic.
                </p>
            </Styled.Wrapper>
        </>
    );
}