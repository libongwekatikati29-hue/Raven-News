// Raven News - Supabase Connection

const SUPABASE_URL = "https://rwmaknwrwtdkozubckyw.supabase.co";
const SUPABASE_KEY = "sb_publishable_9dwLnuEma-v3o19kREj9gg_CfgyFaXe";

async function loadNews() {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/events?select=*&order=event_date.desc`,
            {
                headers: {
                    apikey: SUPABASE_KEY,
                    Authorization: `Bearer ${SUPABASE_KEY}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Supabase error: ${response.status}`);
        }

        const news = await response.json();

        displayNews(news);

    } catch (error) {
        console.error("Raven could not load events:", error);

        const container = document.getElementById("news-container");

        if (container) {
            container.innerHTML = `
                <p>Raven couldn't load the latest information.</p>
            `;
        }
    }
}

function displayNews(news) {
    const container = document.getElementById("news-container");

    if (!container) {
        console.error("Raven couldn't find the news container.");
        return;
    }

    if (news.length === 0) {
        container.innerHTML = "<p>No events found.</p>";
        return;
    }

    container.innerHTML = news.map(event => `
        <article class="news-card">
            <h3>${event.title || "Untitled event"}</h3>

            <p>
                ${event.description || "No description available."}
            </p>

            <div class="news-meta">
                <span>${event.category || ""}</span>
                <span>${event.location || ""}</span>
            </div>

            <small>
                Source: ${event.source_name || "Unknown"}
            </small>
        </article>
    `).join("");
}

document.addEventListener("DOMContentLoaded", loadNews);
